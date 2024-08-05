import React from 'react';
import Navbar from './components/Navbar';



const App: React.FC = () => {
  return (
    <div className="App bg-cover h-screen" style={{backgroundImage: "url('https://i.ytimg.com/vi/Eeaf_Hh__Ls/maxresdefault.jpg')"}}>
      <Navbar />
    </div>
  );
};

export default App;
