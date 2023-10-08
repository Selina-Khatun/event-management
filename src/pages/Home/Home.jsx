import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import Wedding from '../../components/Wedding/Wedding';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>

            <Banner></Banner>
            <h1 className=' text-4xl font-bold text-center font-sans mt-10'>Trusted Vendors Services</h1>

            <div className='grid w-[95%] gap-4 my-10 mx-auto font-sans items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.map(card=><Cards key={card.id}
                    data={card}></Cards>)
                }
            </div>
            <TeamMembers></TeamMembers>
            <Wedding></Wedding>
            <Footer></Footer>
        </div>
    );
};

export default Home;