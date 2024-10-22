 import React from 'react';
 import logo from '../assests/goonj_logo.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, closeSidebar } from '../Redux/Store';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="bg-[#1e293b] text-white py-2 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/" className='text-green-700'>
        <img src={logo} alt=""  className=' w-[120px] h-20'/></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 align-middle">
        <Link to="/" className="hover:text-green-400  font-medium">Home</Link>
        <Link to="/about" className="hover:text-gray-100 font-medium">About</Link>
        <Link to="/contact" className="hover:text-gray-100 font-medium">Contact</Link>
        <Link to="/signup" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200 font-medium">Sign Up</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden focus:outline-none" onClick={() => dispatch(toggleSidebar())}>
      <HiOutlineMenuAlt3 size={30}/>
      </button>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 left-0 w-64 bg-blue-600 h-full z-20">
            <div className="flex justify-between items-center p-4">
             
              <button onClick={() => dispatch(closeSidebar())}>
              <IoCloseSharp  size={30}/>
              </button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-white hover:text-gray-800" onClick={() => dispatch(closeSidebar())}>Home</Link>
              <Link to="/about" className="text-white hover:text-gray-800" onClick={() => dispatch(closeSidebar())}>About</Link>
              <Link to="/contact" className="text-white hover:text-gray-800" onClick={() => dispatch(closeSidebar())}>Contact</Link>
              <Link to="/signup" className="text-white hover:text-gray-800" onClick={() => dispatch(closeSidebar())}>Sign Up</Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

