import React, { useState, useEffect } from 'react';
import image1 from '../../assets/TopVideos/image.png';
import image2 from '../../assets/TopVideos/image.png';
import image3 from '../../assets/TopVideos/image.png';

const topVideos = [
  {
    title: "US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk",
    image: image1,
    time: "2h ago",
  },
  {
    title: "US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk",
    image: image2,
    time: "2h ago",
  },
  {
    title: "US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk",
    image: image3,
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


export default function TopVideos() {
  const [visibleCount, setVisibleCount] = useState(3); // Start with showing 3 articles
  const { width } = useWindowSize(); // Get current window size

  const isAtInitialState = visibleCount === 3;
  const hasMoreArticles = visibleCount < topVideos.length;

  const handleButtonClick = () => {
    if (!hasMoreArticles) {
      setVisibleCount(3); // Reset to initial count if no more articles
    } else {
      setVisibleCount(prevCount => prevCount + 3); // Increase by 3 articles each time
    }
  };

  const buttonText = isAtInitialState ? 'See More' : hasMoreArticles ? 'See More' : 'Back To Top';

  return (
    <div className="p-4 md:p-5 bg-blue-900 text-white">
      <h2 className="container mx-auto px-5 text-2xl font-bold">Top Videos</h2>
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Display only the first video on mobile */}
        {topVideos.slice(0, window.innerWidth >= 768 ? topVideos.length : 1).map((video, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4 text-black">
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="flex justify-center items-center -mt-16">
              <button className="bg-white p-3 rounded-full shadow-md">
                ▶️
              </button>
            </div>
            <h3 className="text-sm font-semibold mt-4">{video.title}</h3>
            <p className="text-gray-500 text-xs mt-1">⏳ {video.time}</p>
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
