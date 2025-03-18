import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
// from-blue-300 to-blue-500
const Weather = () => {
  return (
    <div className="  bg-gradient-to-r from-blue-500 to-gray-500 min-h-screen flex items-center justify-center  ">
      <Navbar/>
      <div>
      <Content/>
      </div>
  
    </div>
  );
};

export default Weather;
