import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar({getSearchData}) {
  const [links, setLinks] = useState([]); 
  const [isOpen, setIsOpen] = useState(false); 
  const [input, setInput] = useState('')


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const search = async()=>{
    try {
      if(input === ''){
        alert('no result found')
      }else{
        const response = await axios.get(`https://newsportalbackend-crdw.onrender.com/api/v1/news/search/${input}`)
        console.log(response.data.news)

        getSearchData(response.data.news)
      }
    } catch (error) {
      alert(error)
    }
  }



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://news-portal-backend-code-1.onrender.com/api/v1/categories/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        console.log("Fetched Categories:", data); // Log correct response

        if (data.categories && Array.isArray(data.categories)) {
          setLinks(data.categories.map(category => ({
            title: category.name,
            to: `/category/${category.name.toLowerCase()}`
          })));
        } else {
          console.error('Unexpected API response structure:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  

  return (
    <div className='relative h-15 md:h-20 bg-white shadow-md'>
      <div className='flex justify-between md:justify-center items-center mx-auto px-4'>
        <div className='relative flex items-center justify-between gap-4 p-2'>
          <FaRegUserCircle className='text-2xl' />
          <button className='mb-6' onClick={search} >
          <IoIosSearch className='text-2xl absolute ml-5'/>
          </button>
          <div>
            <input
              type="text" onChange={(e)=>setInput(e.target.value)} 
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
        {links.map((category, id) => (
          <Link to={category.to} key={id} className="cursor-pointer hover:text-blue-600">
            {category.title}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col items-center p-4">
          {links.map((category, id) => (
            <Link to={category.to} key={id} className="cursor-pointer hover:text-blue-600 py-2">
              {category.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
