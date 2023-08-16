import React, { useState, useEffect } from 'react';
import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import icon from './images/image-avatar.png';
import pic10 from './images/icon-close.svg';
import pic11 from './images/icon-menu.svg';

const Header = ({ openCart }) => {
  const [menuOpen, setMenuOpen] = useState(() => window.innerWidth > 400); // Use a function here

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="App-header">
      <nav className="navBar">
      <img className='open' src={pic11} alt='open Menu' onClick={toggleMenu}/>
        <img src={logo} alt="logo" className='sneakers' />

        <ul className="responsive-menu" style={{ display: menuOpen ? 'flex' : 'none' }}>
          <img src={pic10} alt='exit' onClick={toggleMenu} />
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul>
          <img src={cart} alt="cart" onClick={openCart} />
          <img src={icon} alt="icon" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
