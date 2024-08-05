package com.example.demo05.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo05.dto.LoginDTO;
import com.example.demo05.dto.UserDTO;
import com.example.demo05.entity.User;
import com.example.demo05.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User registerUser(UserDTO userDTO) {
		User user =new User();
		user.setName(userDTO.getName());
		user.setEmail(userDTO.getEmail());
		user.setPassword(userDTO.getPassword());
		return userRepository.save(user);
	}
	
	public User loginUser(LoginDTO loginDTO) {
		User user = userRepository.findByEmail(loginDTO.getEmail());
		if (user != null && user.getPassword().equals(loginDTO.getPassword())) {
			return user;
		}
		return null;
	}
	

}
