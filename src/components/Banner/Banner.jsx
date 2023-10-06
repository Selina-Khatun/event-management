import React from 'react';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <div>
           <div className="hero h-screen  relative" style={{backgroundImage: 'url(https://i.postimg.cc/QC03mDjN/banner.jpg)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
           <div className="hero-overlay bg-opacity-40"></div>
            <Navbar></Navbar>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold"> Largest Wedding Planning Platform</h1>
      <p className="mb-5">Save time and money in planning your wedding</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;