import React, { useState, useEffect } from 'react';
import { dybc_logo } from '../assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    // Add event listener to listen for scroll events
    window.addEventListener("scroll", changeColor);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div>
      <header className={`fixed top-0 h-[94px] z-10 flex justify-between items-center p-4 w-full overflow-hidden ${color ? 'bg-white' : 'bg-transparent'}`}>
        <img className='w-[80px] h-[80px]' src={dybc_logo} alt="logo" /> 
        <nav className='font-poppins font-normal cursor-pointer text-[20px]'>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/'> Home</NavLink>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/about'> About Us</NavLink>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/services'> What We Do</NavLink>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/getinvolved'> Get Involved</NavLink>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/gallery'> Gallery </NavLink>
            <NavLink className=' nav-link mx-2 text-black hover:text-gray-300' to='/contact'> Contact</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
