import React from 'react';
import { FaWind } from "react-icons/fa";
import { RiListSettingsFill } from "react-icons/ri";
import { TbWavesElectricity } from "react-icons/tb";
import { FaMap } from "react-icons/fa";
import a from './ra3doogyoum-removebg-preview.png'
const Sidebar = () => {
  return (
    <div className="h-[700px] w-49 bg-white/20 mt-5  backdrop-blur-lg fixed left-4 rounded-xl border border-white/30 shadow-xl">
  <ul className="flex flex-col space-y-8">
    <li className="hover:bg-white/30 rounded-md p-3 cursor-pointer transition">
    <FaWind  className=' w-12 h-6'/>
    </li>
    <li className="hover:bg-white/30 rounded-md p-2 cursor-pointer transition">
      <a href="#" className="block text-white">
         <img src={a} alt="hello" className="mt-1 w-12 h-12 "/>
        Weather</a>
    </li>
    <li className="hover:bg-white/30 rounded-md p-2 cursor-pointer transition">
      <a href="#" className="block text-white"><TbWavesElectricity className='w-10 h-8' />Cities</a>
    </li>
    <li className="hover:bg-white/30 rounded-md p-2 cursor-pointer transition">
      <a href="#" className="block text-white"><FaMap  className='w-10 h-7' />Map</a>
    </li>
    <li className="hover:bg-white/30 rounded-md p-2 cursor-pointer transition">
      <a href="#" className="block text-white"><RiListSettingsFill  className='w-10 h-8'/>Settings</a>
    </li>
  </ul>
    </div>

  );
};

export default Sidebar;






