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
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const {user,logOut} = useContext(AuthContext)

  const handleLogout = () =>{
     logOut()
     .then(() =>{
        toast.success('Logout successfuly')
     })
     .catch(err => console.log(err))
  }
  
  return (
    <div className='fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#2b66bf] text-gray-300'>
      <div>
        <Link to='/'>
        <img className='w-16' src={logo} alt="logo" /> 
        </Link>   
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='/'>Media</Link>
        </li>
        <li>
        { user?.email ? <><li><Link to='/about'>About</Link></li><button onClick={handleLogout}>Log Out</button></>  : <button><Link to='/signup'>SignUp</Link></button>}
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
        <Link to='/'>Media</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/signup'>SignUp</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link href='/about'>About</Link>
        </li>
        <li className='py-6 text-4xl'>
        { user?.email ? <button onClick={handleLogout}>Log Out</button> : <button><Link to='/signup'>SignUp</Link></button>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;