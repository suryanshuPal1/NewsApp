import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  // Hamburger menu toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative h-15 md:h-20 bg-white shadow-md'>
      <div className='flex justify-between md:justify-center  items-center mx-auto px-4'>
        <div className='relative flex items-center justify-between gap-4 p-2'>
          <FaRegUserCircle className='text-2xl' />
          <IoIosSearch className='absolute left-1/4 transform -translate-x-1/2 text-2xl' />
          <div className=''>
          <input
            type="text"
            placeholder="      Search Latest News Updates, Weather, Entertainment & Many More..."
            className="w-full pl-10 pr-4 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          </div>
        </div>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <MdClose size="30px" color="black" /> : <MdOutlineMenu size="30px" color="black" />}
        </div>
      </div>
      {/* Desktop Navigation Links */}
      <div className={`hidden md:flex justify-center gap-8 text-sm font-semibold bg-white p-2`}>
        {["Budget 2025", "Crime", "Accidents", "Sports", "Politics","Election", "Culture", "Entertainment", "International", "Weather"].map(
          (category) => (
            <span key={category} className="cursor-pointer hover:text-blue-600">
              {category}
            </span>
          )
        )}
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col items-center p-4">
          {["Budget 2025", "Crime", "Accidents", "Sports", "Politics", "Election", "Culture", "Entertainment", "International", "Weather"].map(
            (category) => (
              <span key={category} className="cursor-pointer hover:text-blue-600 py-2">
                {category}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
