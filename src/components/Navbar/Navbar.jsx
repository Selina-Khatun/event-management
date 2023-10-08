import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li className='mr-10' ><NavLink to={'/'}>Home</NavLink></li>

        <li className='mr-10'><NavLink to={'/services'}>Services</NavLink></li>
        <li className='mr-10'><NavLink to={'/about'}>About</NavLink></li>
        <li className='mr-10'><NavLink to={'/register'}>Register</NavLink></li>

        <button className='btn btn-outline lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>


    </>
    return (
        <div className=' bg-transparent bg-clip-border'>
            <div className="navbar z-50 absolute top-0 items-center flex justify-around left-0 right-0 w-[100%] mx-auto ">
                <div className="flex  relative justify-around gap-[49%] items-center ">
                    <div className="dropdown relative flex-1">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-14 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navLinks}
                        </ul>
                        <label tabIndex={0} className="btn btn-error relative  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>


                    {/* <div className=' relative  flex-1 items-center'>

            
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 relative -mb-14 rounded-full">
                                <img src="https://i.postimg.cc/Dywnxxmj/1000-F-282670461-Um2cw-G6-K1-HH9-Rx-Ioli3e-S1-Ihgr5-V8ff-T.jpg" />
                            </div>
                        </label>
                        <h3 className=' relative bottom-12 lg:-left-10 font-DancingScript lg:text-3xl text-white'>WeddingHouse</h3>
                    </div> */}
                    <div className='flex flex-grow justify-center items-center  '>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://i.postimg.cc/Dywnxxmj/1000-F-282670461-Um2cw-G6-K1-HH9-Rx-Ioli3e-S1-Ihgr5-V8ff-T.jpg" />
                            </div>
                        </label>
                       <div>
                       <h3 className='bottom-12  font-DancingScript lg:text-3xl text-white'>WeddingHouse</h3>
                        <p className=' text-gray-200 lg:text-sm text-xs'><i>Wedding events</i></p>
                       </div>
                    </div>

                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold">
                        {navLinks}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;







