import React from 'react';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div className="product-image-wrapper">
            <img 
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
              alt={name}
            />
            <span className="product-badge">New</span>
          </div>
          <p className="product-name">{name}</p>
          <div className="product-card-meta">
            <span className="product-rating"><AiFillStar /> 4.8</span>
            <span className="product-delivery">Free Delivery</span>
          </div>
          <p className="product-price">&#8377;{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product