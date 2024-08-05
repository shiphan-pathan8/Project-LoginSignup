package com.example.demo05.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo05.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
