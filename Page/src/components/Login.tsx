import axios from 'axios';
import React, { useState } from 'react';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    setErrorMessage('');
    try {
      const response = await axios.post('http://localhost:3030/api/user/login', { email, password });
      if (response.data) {
        alert('Login successfully.');
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setErrorMessage('There was an error logging in!');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-gradient-to-r from-purple-400 via-sky-300 to-gray-400 p-8 rounded-3xl">
        <h2 className="text-4xl mb-4 font-bold">Log in</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mb-4 w-full bg-slate-200 "/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-4 w-full bg-slate-200" />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 font-medium" onClick={onClose}>Cancel</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
