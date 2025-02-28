import React, { useState, useEffect } from "react";

const API_URL = "https://newsportalbackend-crdw.onrender.com/api/v1/news/getallnews";

export default function NewsList() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // ✅ Logs the API response
        if (data.success) {
          setNewsList(data.news);
        } else {
          setError("Failed to fetch news.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching news: " + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading news...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <div key={news._id} className="border rounded-lg shadow-md p-4 bg-white">
            {/* ✅ Use default image if avatar is missing */}
            <img
              src={news.avatar && news.avatar.trim() !== "" ? news.avatar : "https://via.placeholder.com/300"}
              alt={news.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{news.title}</h2>
            <p className="text-gray-600">{news.category}</p>
            <p className="text-gray-500 text-sm">
              Published on: {news.date ? new Date(news.date).toLocaleDateString() : "Unknown"}
            </p>
            <p className="mt-3">{news.content ? news.content.substring(0, 100) + "..." : "No content available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
