import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  MdPermMedia,
} from 'react-icons/fa';
import { AuthContext } from '../../Contaxt/AuthProvider';




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className='fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#2b66bf] text-gray-300'>
      <div>
        <img className='w-16' src={logo} alt="logo" /> 
        
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href='/'>Media</a>
        </li>
        <li>
        <a href='/signup'>SignUp</a>
        </li>
        <li>
        <a href='/skills'>About</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href='/'>Media</a>
        </li>
        <li className='py-6 text-4xl'>
        <a href='/about'>Message</a>
        </li>
        <li className='py-6 text-4xl'>
        <a href='/skills'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;