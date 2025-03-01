// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const SearchResults = () => {
//   const { searchQuery } = useParams();
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Build the endpoint using the base URL and search query.
//         const response = await axios.get(`${BASE_API_URL}api/v1/news/${searchQuery}`);
//         setNews(response.data.news || []);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Error fetching news');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, [searchQuery, BASE_API_URL]);

//   if (loading) return <div className="text-center py-4">Loading...</div>;
//   if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

//   return (
//     <div className="max-w-5xl mx-auto p-4 pt-6">
//       <h1 className="text-3xl font-bold mb-4">Search Results for "{searchQuery}"</h1>
//       {news.length > 0 ? (
//         <div className="space-y-4">
//           {news.map((item, index) => (
//             <div key={index} className="p-4 border rounded shadow">
//               <h2 className="text-xl font-semibold">{item.title}</h2>
//               <p className="text-gray-700">{item.content}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">No News Found</div>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
