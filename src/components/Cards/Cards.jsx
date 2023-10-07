import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({data}) => {
  const {id, about,image,name,price,reviews,short_description,title}=data;
 
    return (
        <div>
            <div className="card glass my-4">
  <figure><img className=' w-[100%] h-64' src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      {/* <button onClick={handleButtonMore} className="btn text-black font-semibold normal-case">Learn more</button> */}
      <Link to={`/categories/${id}`}> <button className="btn text-black font-semibold normal-case">Learn more</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;