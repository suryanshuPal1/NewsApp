import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';


function Navbar() {
  const links = [
    {title: "Budget 2025",
      links: "/budget-2025",
    },
    {title: "Crime",
      links: "/crime",
    },
    {title: "Accidents",
      links: "/accident",
    },
    {title: "Sports",
      links: "/sports",
    },
    {title: "Politics",
      links: "/politics",
    },
    {title: "Election",
      links: "/election",
    },
    {title: "Culture",
      links: "/culture",
    },
    {title: "Entertainment",
      links: "/entertainment",
    },
    {title: "International",
      links: "/international",
    },
    {title: "Weather",
      links: "/weather",
    },
  ]
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

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
            placeholder="Search Latest News Updates, Weather, Entertainment & Many More..."
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
        {links.map(
          (category ,id) => (
            <Link to={category.links} key={id} className="cursor-pointer hover:text-blue-600">
              {category.title}
            </Link>
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
export default Navbar;

