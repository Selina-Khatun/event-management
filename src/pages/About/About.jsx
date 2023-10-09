import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TeamMembers from '../../components/TeamMembers/TeamMembers';

const About = () => {
    return (
        <div>

            <div className="hero h-screen  relative" style={{ backgroundImage: 'url(https://i.postimg.cc/QC03mDjN/banner.jpg)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <Navbar></Navbar>
                <div className="hero-content p-9 mt-9 text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 lg:text-4xl text-white font-bold">About Us</h1>
                        <h1 className="mb-5 lg:text-6xl font-bold"> Our Story of
                            Success</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.postimg.cc/bw6sQrqB/team1.jpg" className=" lg:max-w-xl rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to Wedding House!</h1>
                            <p className="py-6">Congratulations on embarking on one of the most exciting journeys of your life! We are here to ensure your wedding manager is as fun and enjoyable as it should be. Gone are the days of stressful hair-pulling and endless spreadsheets as we introduce you to the wonderful world of wedding manager on Wedding House. Being engaged is one of the funnest chapters in your life, so you deserve to make the most of it</p>

                        </div>
                    </div>
                </div>
                <div className=' container w-[90%] mx-auto py-8'>
                    <h1 className="text-5xl font-bold py-6">How Wedding House Began ??</h1>
                    <p>Wedding House was founded by Hamish Shephard in 2020. When Hamish left a career in banking, he had no idea he was setting himself up to revolutionise wedding manager. His experience in the wedding industry began when he transformed his grandmother’s old home into one of the UK’s leading wedding venues.

                        During this process, he quickly discovered that most brides spent the majority of their engagement feeling overwhelmed and confused by the whole wedding manager process. Hamish soon became enamoured by the mission to make wedding manager as enjoyable and fun as the wedding day itself. Thus began a journey of inspiration, discovery and creativity… while also secretly doing all of the necessary boring bits in the background.

                        And the rest is Wedding House!</p>
                    <img className=' h-screen w-full' src="https://i.postimg.cc/25xRqchd/team2.jpg" alt="" />
                </div>
            </div>
            <TeamMembers></TeamMembers>

            <Footer></Footer>
        </div>
    );
};

export default About;