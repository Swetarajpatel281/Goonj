 import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, closeSidebar } from '../Redux/Store';

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="bg-gray-300 text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/" className='text-green-700'>Goonj</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-800">Home</Link>
        <Link to="/about" className="hover:text-gray-800">About</Link>
        <Link to="/contact" className="hover:text-gray-800">Contact</Link>
        <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Sign Up</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden focus:outline-none" onClick={() => dispatch(toggleSidebar())}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 left-0 w-64 bg-blue-600 h-full z-20">
            <div className="flex justify-between items-center p-4">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={() => dispatch(closeSidebar())}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
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

