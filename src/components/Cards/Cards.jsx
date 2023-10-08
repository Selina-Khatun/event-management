import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ data }) => {
  const { id, about, image, name, price, reviews, short_description, title } = data;

  return (
    <div>
      <div className="card glass my-4">
        <figure><img className=' w-[100%] h-64' src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <div className=' flex text-lg font-bold text-black gap-9'>

            <p className=' border border-rose-200 hover:bg-rose-100 rounded'>Price: {price} $</p>
            <p>{title}</p>

          </div>
          <div className="card-actions justify-end">

            {
              short_description.length > 75 ? <p>{short_description.slice(0, 75)}...... <br /> <br /><Link className=' my-3' to={`/categories/${id}`}> <button className="btn text-black font-semibold text-lg normal-case">Learn more</button></Link></p>

                :
                <p>{short_description}</p>

            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;