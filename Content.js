import React from "react";
import chams from './chams-removebg-preview.png'
import a from './ra3doogyoum-removebg-preview.png'
import { SiRainmeter } from "react-icons/si";
import { RiTempHotLine } from "react-icons/ri";
import { FaWind } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
const Content = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-start pt-10 -translate-x-80 ">
      
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Type something..."
          className="w-[730px] p-3  text-white bg-white/20 backdrop-blur-lg border-none rounded-xl placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
      </div>

      <div className="text-center mt-10  -translate-x-60  ">
        <h1 className="text-4xl font-semibold text-white">Chlef</h1>
        <p className="text-white text-sm">Chance of rain: 0%</p>
        <h1 className="text-4xl font-bold text-white mt-6 ">31°</h1>
        <div>
    <img src={chams} alt="Weather icon" className="w-40 h-32 mt-[-110px] ml-[850px] bg-transparent" /> {/* تم تكبير الصورة وتقليل المسافة */}
       </div>
      </div>




      <div className="w-[710px] h-[200px] p-3 mt-12 text-center text-white bg-white/20 backdrop-blur-lg border-none rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
  <h2 className="font-semibold text-white mr-[540px]">TODAY'S FORECAST</h2>
  <div className="text-center mt-10 -translate-x-80 space-x-4 flex flex-col items-center">
    <p>6:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>25°</p>
    </div>
   
  </div>
<div>
<div className="w-[2px] h-[90px] bg-white ml-[80px] mt-[-90px] "></div>
</div>

    {/* التكرار الثاني */}
    <div className="text-center mt-[-100px] mr-[440px] space-x-4 flex flex-col items-center">
    <p>7:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>25°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[180px] mt-[-90px] "></div>
</div>

  {/* التكرار الثالث */}

  <div className="text-center mt-[-100px] mr-[240px] space-x-4 flex flex-col items-center">
    <p>8:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>25°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[280px] mt-[-90px] "></div>
</div>

  {/*التكرار ا4الث */}

  <div className="text-center mt-[-100px] mr-[40px] space-x-4 flex flex-col items-center">
    <p>9:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>25°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[80px] mt-[-90px] "></div>
</div>

{/* 5 */}

<div className="text-center mt-[-100px] mr-[-150px] space-x-4 flex flex-col items-center">
    <p>10:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>25°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[380px] mt-[-90px] "></div>
</div>

{/* 10 */}

<div className="text-center mt-[-100px] mr-[-350px] space-x-4 flex flex-col items-center">
    <p>11:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>35°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[480px] mt-[-90px] "></div>
</div>

{/* 11 */}

<div className="text-center mt-[-100px] mr-[-550px] space-x-4 flex flex-col items-center">
    <p>12:00 PM</p>
    <div className="-translate-x-5">
    <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
    <p>35°</p>
    </div>
  </div>
  <div>
<div className="w-[2px] h-[90px] bg-white ml-[580px] mt-[-90px] "></div>
</div>



<div>
</div>


</div>




<div className="w-[700px] h-[210px] p-3 mt-6 text-center text-white bg-white/20 backdrop-blur-lg border-none rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
  <h2 className="font-semibold text-white mr-[540px]">AIR CONDITIONS</h2> 

  <div className="flex justify-between px-10 mt-6">
    {/* القسم الأول */}
    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <RiTempHotLine className="text-2xl text-gray-500" />
        <p className="font-light text-white">Real Feel</p>
      </div>
      <h1 className="text-2xl font-bold">30°</h1>

      <div className="flex items-center gap-2">
        <SiRainmeter className="text-2xl text-gray-500" />
        <p className="font-light text-white">Chance of Rains</p>
      </div>
      <h1 className="text-2xl font-bold">0%</h1>
    </div>

    
    <div className="flex flex-col items-start space-y-2 mr-[120px]">
      <div className="flex items-center gap-2">
        <FaWind className="text-2xl text-gray-500" />
        <p className="font-light text-white">Wind</p>
      </div>
      <h1 className="text-2xl font-bold">0.2km/h</h1>

      <div className="flex items-center gap-2">
        <IoSettings className="text-2xl text-gray-500" />
        <p className="font-light text-white">UV Index</p>
      </div>
      <h1 className="text-2xl font-bold">3</h1>
    </div>
  </div>


       
  <button className="absolute top-3 right-3 bg-blue-600 rounded-full w-40 h-10">see more</button>

        </div>
           



        <div className="w-[600px] h-[630px] mt-[-630px] mr-[-1400px] text-center text-white bg-white/20 backdrop-blur-lg border-none rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center space-x-4">
  <h1 className="font-semibold mb-[572px] mr-[-150px]">7-DAYS FORECAST</h1>

  <div className="flex flex-col items-center mt-[50px]">
  <div className="flex items-center space-x-20">
    <p className="mr-16">Today</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Sunny</p>
    <h1 className="text-xl ml-16">
      <span>32</span>/21
    </h1>
  </div>
  
  <div className="border-t-2 border-gray-300 mt-6 w-full"></div>
  
  <div className="flex items-center space-x-20 mt-6">
    <p className="mr-16">Tue</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Cloudy</p>
    <h1 className="text-xl ml-16">
      <span>28</span>/18
    </h1>
  </div>



  <div className="border-t-2 border-gray-300 mt-6 w-full"></div>
  
  <div className="flex items-center space-x-20 mt-6">
    <p className="mr-16">Wed</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Cloudy</p>
    <h1 className="text-xl ml-16">
      <span>28</span>/18
    </h1>
  </div>



  <div className="border-t-2 border-gray-300 mt-6 w-full"></div>
  
  <div className="flex items-center space-x-20 mt-6">
    <p className="mr-16">Tru</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Cloudy</p>
    <h1 className="text-xl ml-16">
      <span>28</span>/18
    </h1>
  </div>






  <div className="border-t-2 border-gray-300 mt-6 w-full"></div>
  
  <div className="flex items-center space-x-20 mt-6">
    <p className="mr-16">Fri</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Cloudy</p>
    <h1 className="text-xl ml-16">
      <span>28</span>/18
    </h1>
  </div>




  <div className="border-t-2 border-gray-300 mt-6 w-full"></div>
  
  <div className="flex items-center space-x-20 mt-6">
    <p className="mr-16">Sat</p>
    <img src={chams} alt="chams" className="w-12 h-12 mx-16" />
    <p className="mx-16">Cloudy</p>
    <h1 className="text-xl ml-16">
      <span>28</span>/18
    </h1>
  </div>




</div>






  
</div>
</div>  
   
  );
};

export default Content;
