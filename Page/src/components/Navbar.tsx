import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className=" p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-yellow-300 text-6xl font-semibold">CarDarshan <p className='text-2xl font-medium'>BADHATE INDIA KA BHAROSA</p></div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 rounded-full '> 
          <button className="text-white text-2xl mr-2 font-medium" onClick={() => setShowLogin(true)}>
            Log in /
          </button>
          <button className="text-white text-2xl font-medium" onClick={() => setShowRegister(true)}>
            Sign up
          </button>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Navbar;







