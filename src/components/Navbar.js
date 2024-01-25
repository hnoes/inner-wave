import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Breathe
            <i className="fas fa-lungs" style={{ marginLeft: '10px' }}></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-bars' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/yoga'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Yoga
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/breathwork'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Breathwork
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Library
              </Link>
            </li>

            <li className='nav-item'> 
              <Link
                to='/coaching'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Coaching
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>Coaching</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
