import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';

const Categories = () => {
    const [selectedItem, setSelectedItem] = useState({});

    const { id } = useParams();
    console.log('ID:', id);

    const data = useLoaderData();
    console.log('Data:', data);

    useEffect(() => {
        if (data && id) {
            const foundItem = data?.find(item => {
                console.log('Item ID:', item.id);
                console.log('Expected ID:', id);
                return item.id === parseInt(id);
            });

            console.log(foundItem);
            setSelectedItem(foundItem);

        }

    }, [id, data]);

    if (!selectedItem || Object.keys(selectedItem).length === 0) {
        return <div><span className="loading loading-spinner loading-sm"></span></div>; // You can replace this with a loading indicator
    }

    const { about, image, name, price, reviews, author_img, short_description, title } = selectedItem;
    // console.log(selectedItem)
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
    return (
        <div>
            <div className="hero lg:h-screen h-fit  relative" style={backgroundImageStyle}>
                <div className="hero-overlay bg-opacity-40"></div>
                <Navbar></Navbar>
                <div className="hero-content  mt-10 p-8 text-center text-neutral-content">
                    <div className=" text-white lg:mt-5 ">
                        <h1 className="mb-2 md:text-5xl text-white font-bold"> {title}</h1>
                        <p className="mb-2">Save time and money in planning your wedding</p>
                        <div className='flex justify-center lg:p-2 gap-10 lg:text-3xl font-bold'>
                            <p>Price: {price} $</p>
                            <p>{about}</p>
                        </div>
                      <div className='flex justify-center text-xl text-white gap-9'> 


                      <p>  Name : {name}</p>
                       <p>  Reviews : {reviews} </p>


                      </div>

                     <div className="avatar lg:p-4">
                            <div className=" lg:w-24 w-12 rounded-full ring ">
                                <img src={author_img} />
                            </div>
                        </div>
                        <p className=' text-white md:text-base text-xs'>{short_description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;