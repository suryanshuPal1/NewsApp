import React, { useState, useEffect } from 'react';
import image1 from '../../assets/DailyReports/image-1.png';
import image2 from '../../assets/DailyReports/image-2.png';
import image3 from '../../assets/DailyReports/image-3.png';
import image4 from '../../assets/DailyReports/image-4.png';
import image5 from '../../assets/DailyReports/image-5.png';
import { Link } from 'react-router-dom';

const technologyNews = [
  {
    title: "Delhi vs Railways Day 3 Highlights, Ranji Trophy: Virat Kohli Flops With Bat, But Wins On Ranji Comeback",
    image: image1,
    time: "2h ago",
  },
  {
    title: "'May Or May Not': Trump Says Will Decide On Canada Mexico Tariffs Tonight",
    image: image2,
    time: "2h ago",
  },
  {
    title: "Mumbai and Pune, look up tonight: the International Space Station will be visible to naked eye",
    image: image3,
    time: "2h ago",
  },
  {
    title: "From Gaza to Los Angeles, our leaders have set the world on fire",
    image: image4,
    time: "2h ago",
  },
  {
    title: "Emergency Box Office Collection Day 9: Kangana Ranaut’s Film Crosses Rs 15 Crore Mark",
    image: image5,
    time: "2h ago",
  },
  {
    title: "Delhi vs Railways Day 3 Highlights, Ranji Trophy: Virat Kohli Flops With Bat, But Wins On Ranji Comeback",
    image: image1,
    time: "2h ago",
  },
  {
    title: "'May Or May Not': Trump Says Will Decide On Canada Mexico Tariffs Tonight",
    image: image2,
    time: "2h ago",
  },
  {
    title: "Mumbai and Pune, look up tonight: the International Space Station will be visible to naked eye",
    image: image3,
    time: "2h ago",
  },
  {
    title: "From Gaza to Los Angeles, our leaders have set the world on fire",
    image: image4,
    time: "2h ago",
  },
  {
    title: "Emergency Box Office Collection Day 9: Kangana Ranaut’s Film Crosses Rs 15 Crore Mark",
    image: image5,
    time: "2h ago",
  },
];



function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default function Technology() {
  const [visibleCount, setVisibleCount] = useState(3); // Start with showing 3 articles
  const { width } = useWindowSize(); // Get current window size

  const isAtInitialState = visibleCount === 3;
  const hasMoreArticles = visibleCount < technologyNews.length;

  const handleButtonClick = () => {
    if (!hasMoreArticles) {
      setVisibleCount(3); // Reset to initial count if no more articles
    } else {
      setVisibleCount(prevCount => prevCount + 3); // Increase by 3 articles each time
    }
  };

  const buttonText = isAtInitialState ? 'See More' : hasMoreArticles ? 'See More' : 'Back To Top';

  return (
    <div className="container mx-auto px-6 py-8 bg-gray-100">
      <Link to='/technology' className="text-2xl font-bold mb-4">Technology</Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Render all articles in desktop mode */}
        {width >= 768
          ? technologyNews.map((article, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-4 flex gap-2">
                <img src={article.image} alt={article.title} className="w-full h-34 object-cover rounded-md" />
                <span>
                  <h3 className="text-xs">{article.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">⏳ {article.time}</p>
                </span>
              </div>
            ))
          : technologyNews.slice(0, visibleCount).map((article, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-4 flex gap-2">
                <img src={article.image} alt={article.title} className="w-full h-34 object-cover rounded-md" />
                <span>
                  <h3 className="text-xs">{article.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">⏳ {article.time}</p>
                </span>
              </div>
            ))}
      </div>

      {/* Button only appears on mobile screens and is aligned to the right */}
      {width < 768 && (
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleButtonClick} 
            className="px-4 py-2 bg-transparent text-black rounded"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
