import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_BASE_URL = "https://newsportalbackend-crdw.onrender.com/api/v1/news/getsinglenews/";

export default function SingleNews() {
  const { newsid } = useParams(); // ✅ Get the news ID from URL
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received newsid:", newsid); // Debugging
  
    if (!newsid || newsid.length !== 24) { // ✅ Check if newsid is valid
      setError("Invalid news ID");
      setLoading(false);
      return;
    }
  
    fetch(`https://newsportalbackend-crdw.onrender.com/api/v1/news/getsinglenews/${newsid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.success) {
          setNews(data.news);
        } else {
          setError(data.message || "News not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setError("Error fetching news: " + error.message);
        setLoading(false);
      });
  }, [newsid]);
  

  if (loading) return <p>Loading news...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!news) return <p>News not found.</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="border rounded-lg overflow-hidden shadow-md p-4">
        <img
          src={news.avatar && news.avatar.trim() ? news.avatar : "https://via.placeholder.com/300"}
          alt={news.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{news.title}</h1>
        <p className="text-gray-600">{news.category}</p>
        <p className="mt-4">{news.content}</p>
        <p className="text-gray-500 mt-2">
          Published on: {news.date ? new Date(news.date).toLocaleDateString() : "Unknown"}
        </p>
      </div>
    </div>
  );
}
