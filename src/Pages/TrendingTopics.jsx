import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingTopics() {
  const url = 'https://news-portal-backend-code-a5rg.onrender.com/api/v1/trending_topics/alltrendingtopics';
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setTrendingTopics(response.data.data);
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
    <div className="trending-topics-container">
      <h1>Trending Topics</h1>
      <div className="topics-grid">
        {trendingTopics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h2>{topic.topicName}</h2>
            <p>{topic.description}</p>
            {/* Add animated icons or other visual elements here */}
            <div className="icon-container">
              <i className="fa fa-fire" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingTopics;
