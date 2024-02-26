package com.twitter.backend.controller;

import com.twitter.backend.exception.EmailNotFoundException;
import com.twitter.backend.exception.SameUserAlreadyExist;
import com.twitter.backend.model.User;
import com.twitter.backend.model.UserData;
import com.twitter.backend.repository.UserRepository;
import com.twitter.backend.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody UserData userData) throws SameUserAlreadyExist {

        return new ResponseEntity<>(userServiceImpl.createUser(userData),HttpStatus.OK);

    }
    @GetMapping("/getUser/{email}/{password}")
    public ResponseEntity<User> getUser(@PathVariable String email, @PathVariable String password) throws EmailNotFoundException {

        return new ResponseEntity<>(userServiceImpl.findUser(email,password), HttpStatus.OK);

    }

    @PutMapping("/updateUser/{email}")
    public ResponseEntity<User> updateUser(@PathVariable String email,@RequestBody String tweet){

        User user = userServiceImpl.updateUser(email, tweet);

        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
