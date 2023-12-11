import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";

const MySkills = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white mb-5'>My Skill</h1>
            </div>
            <div className='flex flex-col items-center justify-center my-8'>
                <div className='flex lg:flex-row flex-col lg:gap-40'>
                    <div className='border rounded-full p-10'>
                        <FaReact className='text-7xl text-white'></FaReact>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>React js</p>
                    
                    </div>
                    <div className='border rounded-full p-10'>
                        <TbBrandJavascript className='text-7xl text-white'></TbBrandJavascript>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>Javascript</p>
                    </div>
                    <div className='border rounded-full p-10'>
                        <SiExpress className='text-7xl text-white'></SiExpress>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>Express js</p>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaNodeJs className='text-7xl text-white'></FaNodeJs>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>Node js</p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-32 mt-10'>
                    <div className='border rounded-full p-10'>
                        <SiMongodb className='text-7xl text-white'></SiMongodb>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>MongoDB</p>
                    </div>
                    <div className='border rounded-full p-10'>
                        <SiFirebase className='text-7xl text-white'></SiFirebase>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>Firebase</p>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaHtml5 className='text-7xl text-white'></FaHtml5>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>HTML</p>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaCss3 className='text-7xl text-white'></FaCss3>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>CSS</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySkills;