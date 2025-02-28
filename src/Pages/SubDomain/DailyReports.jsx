import React from 'react'
import image1 from '../../assets/SubDomain/image-1.png';
import image2 from '../../assets/SubDomain/image-2.png';
import image3 from '../../assets/SubDomain/image-3.png';
import image4 from '../../assets/SubDomain/image-4.png';
import image5 from '../../assets/SubDomain/image-5.png';
import image6 from '../../assets/SubDomain/image-6.png';

const articles = [
    {
      title: "Tecno announces new smartphone, laptop series: All the details",
      date: "02, Jan, 2025 00:38",
      image: image1,
    },
    {
      title: "MVIT organises three-day national seminar on Biotechnology",
      date: "02, Jan, 2025 00:43",
      image: image2,
    },
    {
      title: "Mumbai: Santa Cruz convent celebrates centenary year mass",
      date: "02, Jan, 2025 01:02",
      image: image3,
    },
    {
      title: "Fraudster steals 2 mobiles on train & withdraws 6.25L; held",
      date: "02, Jan, 2025 02:53",
      image: image4,
    },
    {
      title: "Smart watering technology for optimum irrigation",
      date: "02, Jan, 2025 05:30",
      image: image5,
    },
    {
      title: "Fuel adulteration: NGT orders inspection of petrol pumps",
      date: "02, Jan, 2025 07:44",
      image: image6,
    },
  ];

export default function DailyReports() {
  return (
    <div className="max-w-3xl mx-auto  container px-6 py-8">
      <h1 className="text-xl font-bold mb-4">Daily Reports</h1>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="flex items-center space-x-4 border-b pb-4">
            <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-md" />
            <div>
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-sm text-blue-500">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
