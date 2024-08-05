package com.example.demo05.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo05.dto.LoginDTO;
import com.example.demo05.dto.UserDTO;
import com.example.demo05.entity.User;
import com.example.demo05.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins="http://localhost:5173/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public User registerUser(@RequestBody UserDTO userDTO) {
		return userService.registerUser(userDTO);
	}
	
	
	@PostMapping("/login")
	public User loginUser(@RequestBody LoginDTO loginDTO) {
		return userService.loginUser(loginDTO);
	}

	
}
