package com.twitter.backend.repository;

import com.twitter.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    User findByEmail (String email);

    User findByEmailAndPassword(String email,  String password);
}
