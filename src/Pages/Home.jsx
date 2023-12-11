import React from 'react';
import MyCard from '../components/MyCard';
import MySkills from '../components/MySkills';

const Home = () => {
    return (
      <>
        <div className='lg:flex lg:items-center lg:justify-center lg:h-screen  lg:px-10 lg:gap-40'>
            <MyCard></MyCard>
            <div className='lg:w-[600px] border p-14 rounded-full mt-4'>
                <h1 className='lg:text-3xl text-[#B3B3B3] font-mono'>  Hey, Hi from Digontha, I am a junior frontend developer, I have determination to work and at least enthusiasm. As a fresher, I have at least a desire to learn and work.</h1>
            </div>
        </div>

        <MySkills></MySkills>
      </>
    );
};

export default Home;