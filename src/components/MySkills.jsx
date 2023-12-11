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
                <div className='flex gap-40'>
                    <div className='border rounded-full p-10'>
                        <FaReact className='text-7xl text-white'></FaReact>
                        <p className='text-xl text-center text-white hover:underline cursor-pointer'>React</p>
                    
                    </div>
                    <div className='border rounded-full p-10'>
                        <TbBrandJavascript className='text-7xl text-white'></TbBrandJavascript>
                       
                    </div>
                    <div className='border rounded-full p-10'>
                        <SiExpress className='text-7xl text-white'></SiExpress>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaNodeJs className='text-7xl text-white'></FaNodeJs>
                    </div>
                </div>
                <div className='flex gap-32 mt-10'>
                    <div className='border rounded-full p-10'>
                        <SiMongodb className='text-7xl text-white'></SiMongodb>
                    </div>
                    <div className='border rounded-full p-10'>
                        <SiFirebase className='text-7xl text-white'></SiFirebase>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaHtml5 className='text-7xl text-white'></FaHtml5>
                    </div>
                    <div className='border rounded-full p-10'>
                        <FaCss3 className='text-7xl text-white'></FaCss3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySkills;