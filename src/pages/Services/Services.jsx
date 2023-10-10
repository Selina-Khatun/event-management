import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:1000});
const Services = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className="hero h-screen  relative" style={{ backgroundImage: 'url(https://i.postimg.cc/QC03mDjN/banner.jpg)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <Navbar></Navbar>
                <div className="hero-content p-9 mt-9 text-ellipsis text-neutral-content">
                    <div className="">
                        <h1 data-aos="flip-down" className="mb-5 lg:text-6xl font-bold">Our Services</h1>
                        <h1 data-aos="fade-up" className="mb-5 lg:text-5xl text-white font-bold"> Planning a Fabulous
                            Event?</h1>
                        <p className="mb-5">Save time and money in planning your wedding & select your preferred style</p>

                    </div>
                </div>
            </div>

            <div>
                <h1 className=' text-4xl font-bold text-center font-sans mt-10'>Trusted Vendors Services</h1>

                <div className='grid w-[95%] gap-4 my-10 mx-auto font-sans items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        data.map(card => <Cards key={card.id}
                            data={card}></Cards>)
                    }
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Services;