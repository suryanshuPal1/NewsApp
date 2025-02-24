import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AboutUs() {
    const url = 'https://news-portal-backend-code-a5rg.onrender.com/api/v1/aboutus/getaboutus';
    const [aboutUsData, setAboutUsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data.success) {
          setAboutUsData(response.data.data);
        } else {
          setError(response.data.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <div className="max-w-5xl mx-auto p-4 pt-6 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-wrap justify-center text-center lg:text-left lg:justify-start">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <p className="text-lg">
          {aboutUsData.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p><strong>About Us:</strong> {item.aboutUs}</p>
          <p><strong>Contact Us:</strong> {item.contactUs}</p>
          <p><strong>Advertise With Us:</strong> {item.advertiseWithUs}</p>
          <p><strong>Privacy & Cookies:</strong> {item.privacyAndCookiesNotice}</p>
          <p>
            <strong>Follow Us:</strong>
            {item.followUs && item.followUs.map((link, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ))}
          </p>
        </div>
      ))}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <img src="your-image-url.jpg" alt="About Us Image" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
  );
}