package com.twitter.backend.controller;

import com.twitter.backend.model.User;
import com.twitter.backend.repository.UserRepository;
import com.twitter.backend.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user) {

        String tempEmail = user.getEmail();
        User temp = userRepository.findByEmail(tempEmail);



        if(temp != null && temp.getEmail() == tempEmail){
            return "error";
        }

        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        userServiceImpl.createUser(user);

        return "success";
    }

    @PostMapping("/getUser")
    public String getUser(@RequestBody User user){

        String tempEmail = user.getEmail();
        User temp = userRepository.findByEmail(tempEmail);
        if(temp != null && bCryptPasswordEncoder.matches(user.getPassword(),temp.getPassword())){
            return "success";
        }


        return "error";
    }
}
