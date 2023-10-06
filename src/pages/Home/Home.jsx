import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>

            <Banner></Banner>
            <div className='grid w-[95%] my-10 mx-auto items-center grid-cols-1 md:grid-cols-3'>
                
                {
                    data.map(card=><Cards key={card.id}
                    data={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;