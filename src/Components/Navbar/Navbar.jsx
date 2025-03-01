import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [news, setNews] = useState(null);
  const [singleNews, setSingleNews] = useState(null);
  const navigate = useNavigate();

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}api/v1/news/search/`);
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const fetchSingleNews = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}api/v1/news/getsinglenews/:newsid`);
        const data = await res.json();
        setSingleNews(data);
      } catch (error) {
        console.error("Error fetching single news:", error);
      }
    };

    fetchNews();
    fetchSingleNews();
  }, [BASE_API_URL]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        <FaUser className="text-xl cursor-pointer" />

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-4">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search News..."
            className="pl-10 pr-4 py-1 w-full border rounded-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md"
          >
            Search
          </button>
        </form>


        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
        </div>
      </div>

      
      <div className={`md:flex justify-center gap-4 bg-gray-100 p-2 ${menuOpen ? "block" : "hidden md:block"}`}>
        <Link to="/budget-2025" className="p-2 text-gray-700 hover:text-blue-500">Budget 2025</Link>
        <Link to="/crime" className="p-2 text-gray-700 hover:text-blue-500">Crime</Link>
        <Link to="/sports" className="p-2 text-gray-700 hover:text-blue-500">Sports</Link>
        <Link to="/politics" className="p-2 text-gray-700 hover:text-blue-500">Politics</Link>
      </div>

     
      <div className="p-4 bg-gray-200">
        <h3 className="text-lg font-semibold">Latest News</h3>
        {news ? (
          <ul>
            {news.articles?.slice(0, 3).map((article, index) => (
              <li key={index} className="text-sm text-gray-700">
                {article.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading news...</p>
        )}

        <h3 className="text-lg font-semibold mt-4">Single News</h3>
        {singleNews ? (
          <p className="text-sm text-gray-700">{singleNews.title}</p>
        ) : (
          <p className="text-gray-500">Loading single news...</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { MdOutlineMenu, MdClose } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [news, setNews] = useState(null);
//   const navigate = useNavigate();

//   const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch(`${BASE_API_URL}api/v1/news/search/`);
//         const data = await res.json();
//         setNews(data);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, [BASE_API_URL]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search/${searchQuery.trim()}`);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="flex justify-between items-center px-6 py-3">
//         <FaUser className="text-xl cursor-pointer" />

//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-4">
//           <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search News..."
//             className="pl-10 pr-4 py-1 w-full border rounded-md focus:outline-none"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md"
//           >
//             Search
//           </button>
//         </form>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
//         </div>
//       </div>

//       {/* Navigation Items */}
//       <div className={`md:flex justify-center gap-4 bg-gray-100 p-2 ${menuOpen ? "block" : "hidden md:block"}`}>
//         <Link to="/budget-2025" className="p-2 text-gray-700 hover:text-blue-500">Budget 2025</Link>
//         <Link to="search/crime" className="p-2 text-gray-700 hover:text-blue-500">Crime</Link>
//         <Link to="/sports" className="p-2 text-gray-700 hover:text-blue-500">Sports</Link>
//         <Link to="/politics" className="p-2 text-gray-700 hover:text-blue-500">Politics</Link>
//       </div>

//       {/* API Data Display */}
//       <div className="p-4 bg-gray-200">
//         <h3 className="text-lg font-semibold">Latest News</h3>
//         {news ? (
//           <ul>
//             {news.articles?.slice(0, 3).map((article, index) => (
//               <li key={index} className="text-sm text-gray-700">
//                 {article.title}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">Loading news...</p>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

