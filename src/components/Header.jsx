import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define your inline styles
  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <header>
      <Link to="/" style={linkStyle}><h1>Class Note</h1></Link>
      
      <ul className=''>
        <li><Link to="/courses" style={linkStyle}>Courses</Link></li>
        <li><Link to="/my-account" style={linkStyle}>Account</Link></li>
      </ul>
    </header>
  )
}

export default Header;
