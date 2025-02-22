import React from 'react'
import image from '../../assets/TopNews/image.png';

const newsSections = [
    {
      title: "Top News",
      articles: [
        {
          headline:
            "Budget 2025: Nirmala Sitharaman Announces Nuclear Energy Mission For 'Viksit Bharat'",
          image: image,
        },
      ],
    },
    {
      title: "Editor's Pick",
      articles: [
        {
          headline:
            "Budget 2025: Nirmala Sitharaman Announces Nuclear Energy Mission For 'Viksit Bharat'",
          image: image,
        },
      ],
    },
    {
      title: "Most Read",
      articles: [
        {
          headline:
            "Budget 2025: Nirmala Sitharaman Announces Nuclear Energy Mission For 'Viksit Bharat'",
          image: image,
        },
      ],
    },
  ];
  


export default function TopNews() {
  return (
    <div className="container mx-auto px-6 py-8  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsSections.map((section, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            {section.articles.map((article, j) => (
              <div key={j}>
                <img
                  src={article.image}
                  alt={article.headline}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-sm font-semibold mt-2 border-b-2 border-gray-300 pb-2">{article.headline}</h3>
                <ul className="mt-2 space-y-5 text-gray-600 text-xs">
                  <li className='border-b-2 border-gray-300 pb-2'>US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk</li>
                  <li className='border-b-2 border-gray-300 pb-2'>US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk</li>
                  <li className='border-b-2 border-gray-300 pb-2'>US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk</li>
                  <li className='border-b-2 border-gray-300 pb-2'>US Plane Crash Footage: AA Flight 5342’s Deadly Mod-Air Crash With US Army Black Hawk</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
