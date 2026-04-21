import React from 'react';
import { BsHeadphones, BsShieldCheck, BsTruck } from 'react-icons/bs';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    {bannerData && bannerData.length > 0 && (
      <HeroBanner heroBanner={bannerData[0]} />
    )}
    
    {/* Trust Badges */}
    <div className="trust-badges">
      <div className="trust-badge">
        <BsTruck className="trust-icon" />
        <div>
          <h4>Free Shipping</h4>
          <p>On orders above &#8377;999</p>
        </div>
      </div>
      <div className="trust-badge">
        <BsShieldCheck className="trust-icon" />
        <div>
          <h4>1 Year Warranty</h4>
          <p>Guaranteed quality</p>
        </div>
      </div>
      <div className="trust-badge">
        <BsHeadphones className="trust-icon" />
        <div>
          <h4>24/7 Support</h4>
          <p>Expert assistance</p>
        </div>
      </div>
    </div>

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Discover our curated collection of premium audio gear</p>
    </div>

    <div className="products-container">
      {products?.length > 0 ? (
        products.map((product) => <Product key={product._id} product={product} />)
      ) : (
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>No products yet. Add products in Sanity Studio.</p>
      )}
    </div>

    {bannerData && bannerData.length > 0 && (
      <FooterBanner footerBanner={bannerData[0]} />
    )}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products: products || [], bannerData: bannerData || [] }
  }
}

export default Home;
