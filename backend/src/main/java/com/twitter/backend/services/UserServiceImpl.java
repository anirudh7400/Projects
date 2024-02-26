package com.twitter.backend.services;

import com.twitter.backend.exception.EmailNotFoundException;
import com.twitter.backend.exception.SameUserAlreadyExist;
import com.twitter.backend.model.User;
import com.twitter.backend.model.UserData;
import com.twitter.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(UserData userData) throws SameUserAlreadyExist{

        User user = User.build(0, userData.getUserName(), userData.getEmail(),  userData.getPassword(),
        new ArrayList<>());

        User tempUser = userRepository.findByEmail(userData.getEmail());
        if(tempUser == null){
            user.setPassword(bCryptPasswordEncoder.encode(userData.getPassword()));
            userRepository.save(user);
        }

        else{
            throw new SameUserAlreadyExist("email already taken !!!");
        }
        return user;
    }

    public User findUser(String email, String password) throws EmailNotFoundException {
        User user =  userRepository.findByEmail(email);

        if(user != null && bCryptPasswordEncoder.matches(password, user.getPassword())){
            return user;
        }
        else{
            throw new EmailNotFoundException("email not found !!");
        }
    }

    public User updateUser(String email, String tweet){

        User user = userRepository.findByEmail(email);
        user.getTweet().add(tweet);

        userRepository.save(user);
        return user;
    }



}
