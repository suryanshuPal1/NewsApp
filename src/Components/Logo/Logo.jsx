import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {authActions} from "../../store/auth"


export default function Logo() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const currentDate = new Date();
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const logout = () => {
    localStorage.removeItem("id");
    // localStorage.removeItem("token");  // If needed
    localStorage.removeItem("role"); 
    navigate("/log-in");
    dispatch(authActions.logout());
     
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
      <div className='h-40 mx-auto'>
    <div className='relative flex items-center justify-center w-full h-full px-2 bg-blue-900 text-white'>
        <a href="#" className='flex flex-col items-center justify-center font-semibold text-4xl md:text-6xl' style={{ fontFamily: 'Rozha One' }}>
          The News 
          <span className='text-xs md:text-md'>{formattedDate}</span>
        </a>
        {isLoggedIn === false ?  
          <Link to='/log-in'>
            <button className='absolute right-5 md:right-40 bottom-1/4 md:top-1/2 transform translate-y-1/2
            bg-gray-500 text-black-500 border-2 border-gray-500 rounded text-xs md:text-sm px-1 md:px-10 py-0 md:py-0.5 h-6 md:h-8'>
            LogIn
            </button>
          </Link>:
          <Link to='/log-in'>
            <button onClick={logout} className='absolute right-5 md:right-40 bottom-1/4 md:top-1/2 transform translate-y-1/2
            bg-gray-500 text-black-500 border-2 border-gray-500 rounded text-xs md:text-sm px-1 md:px-10 py-0 md:py-0.5 h-6 md:h-8'>
              logout
            </button>
          </Link>
          
        }
        
        
      </div>
      </div>
  )
}
