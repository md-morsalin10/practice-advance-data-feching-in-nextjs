import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {
    // console.log(product);
    const {id,image,name,price,description} =product
    
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure className='p-5'>
    <Image
      width={200}
      height={200}
      src={image}
      className='object-contain rounded-2xl'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">${price}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link href={`products/${id}`}>
       <button className='btn btn-primary'>Show Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;