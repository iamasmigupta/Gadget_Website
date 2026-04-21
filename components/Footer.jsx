import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="logo" style={{ fontSize: '20px', marginBottom: '4px' }}>🎧 JSM Mastery</p>
      <p>© 2025 JSM Mastery. Premium sound, delivered.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer