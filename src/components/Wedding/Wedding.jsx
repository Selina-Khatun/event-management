import React from 'react';
import {BsPatchCheckFill,BsShieldFillCheck} from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
const Wedding = () => {
    return (
        <div className=' shadow-2xl rounded-2xl py-5 my-20 mx-10 px-4'>
            <h1 className=' text-5xl font-sans p-5 font-bold'>Why Wedding House?</h1>
            <h3 className=' flex flex-wrap lg:text-3xl  font-sans px-5 font-bold'><span className=' text-rose-500 font-DancingScript  text-xl md:text-6xl'>WeddingHouse</span> is Bangladesh’s largest wedding planning platform by WeddingHouse.com</h3>
            <div className='flex gap-5 flex-wrap justify-around py-10  font-bold  font-sans'>
                <div className='flex flex-grow justify-center items-center gap-5 '>
                <BsShieldFillCheck className=' text-3xl'></BsShieldFillCheck>
                    
                    <p className='text-gray-500'>2 Lakh+ trusted vendors in 40+ cities</p>
                </div>
                <div className='flex  flex-grow justify-center items-center gap-5 '>
                    <AiFillLike className=' text-4xl'></AiFillLike>
                    <p className='text-gray-500'>3 Lakh+ happy customers</p>
                </div>
                <div className='flex  flex-grow justify-center items-center gap-5 '>
                <BsPatchCheckFill className=' text-3xl'></BsPatchCheckFill>
                    <p className='text-gray-500'>Trust of the Matrimony.com group</p>
                </div>
                <div className='flex  flex-grow justify-center items-center gap-5 '>
                    <HiLightBulb className=' text-4xl'></HiLightBulb>
                    <p className='text-gray-500'>Latest wedding planning ideas & inspiration</p>
                </div>
            </div>
        </div>
    );
};

export default Wedding;