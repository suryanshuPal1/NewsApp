import React from 'react'
import  { useState, useEffect } from 'react';

const TopNews = () => {
  const [content, setContent] = useState([]); // State to store content

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('https://newsportalbackend-crdw.onrender.com/api/v1/content/');
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        
        // Assuming data is an array or object with content
        if (Array.isArray(data)) {
          setContent(data);
        } else if (data.content) {
          setContent(data.content);
        } else {
          console.error('Expected content in response:', data);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, []);

  return (
    <><div>TopNews</div><div>
      {Array.isArray(content) && content.map((item, id) => (
        <div key={id}>
          {/* Display content item details here */}
          <h2>{item.title || item.headline}</h2>
          <p>{item.description || item.content}</p>
        </div>
      ))}
    </div></>
  )
}

export default TopNews