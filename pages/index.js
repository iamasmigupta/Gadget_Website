import React, { useState, useMemo } from 'react';
import { BsHeadphones, BsShieldCheck, BsTruck, BsSearch, BsSortDown } from 'react-icons/bs';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  // Extract unique categories from product names
  const categories = useMemo(() => {
    const cats = ['All'];
    products?.forEach(p => {
      const cat = p.name?.toLowerCase().includes('headphone') ? 'Headphones'
        : p.name?.toLowerCase().includes('speaker') ? 'Speakers'
        : p.name?.toLowerCase().includes('watch') ? 'Watches'
        : 'Accessories';
      if (!cats.includes(cat)) cats.push(cat);
    });
    return cats;
  }, [products]);

  // Get category for a product
  const getCategory = (product) => {
    const name = product.name?.toLowerCase() || '';
    if (name.includes('headphone') || name.includes('earphone') || name.includes('ear')) return 'Headphones';
    if (name.includes('speaker')) return 'Speakers';
    if (name.includes('watch')) return 'Watches';
    return 'Accessories';
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products || [];
    
    // Search filter
    if (searchQuery) {
      result = result.filter(p => 
        p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.details?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter(p => getCategory(p) === activeCategory);
    }
    
    // Sort
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return result;
  }, [products, searchQuery, activeCategory, sortBy]);

  return (
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

      {/* Search & Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-box">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="sort-box">
          <BsSortDown className="sort-icon" />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <Product key={product._id} product={product} />)
        ) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', padding: '40px 0' }}>
            No products found. Try a different search or category.
          </p>
        )}
      </div>

      {bannerData && bannerData.length > 0 && (
        <FooterBanner footerBanner={bannerData[0]} />
      )}
    </div>
  );
};

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
