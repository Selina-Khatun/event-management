import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li ><Link to={'/'}>Home</Link></li>
        <li ><Link to={'/login'}>Login</Link></li>

    </>
    return (
        <div className=' bg-gray-500'>
            <div className="navbar z-50 absolute top-0  left-0  right-0 w-[90%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            {navLinks}
                        </ul>
                    </div>
                    
                   
                       <div className=' relative'>
                    
                       <img src="https://i.postimg.cc/Dywnxxmj/1000-F-282670461-Um2cw-G6-K1-HH9-Rx-Ioli3e-S1-Ihgr5-V8ff-T.jpg" className=' relative top-2 right-2 rounded-full w-14 h-14' /> 
                        <h3 className=' relative bottom-10 left-0 font-DancingScript text-3xl text-white'>WeddingHouse</h3>
                       </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;