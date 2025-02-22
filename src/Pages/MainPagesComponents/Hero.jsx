import React from "react";
import Tired1 from "../../assets/hero/frame-1.png";
import Tired2 from "../../assets/hero/frame-2.png";
import Image1 from "../../assets/hero/image-1.png";
import Image2 from "../../assets/hero/image-2.png";
import Image3 from "../../assets/hero/image-3.png";
import Image4 from "../../assets/hero/image-4.png";
import Image5 from "../../assets/hero/image-5.png";
import Image6 from "../../assets/hero/image-6.png";

const newsItems = [
  {
    title:
      "Trump dinner, ‘El-Mo’ meeting on cards at PM Modi’s US visit on February 13",
    img: Image1,
  },
  {
    title:
      "Trump Instructs Advisers To Obliterate Iran If It Assassinates US Leader, Signs Executive Order",
    img: Image2,
  },
  {
    title: "Why Tirupati temple board axed 18 employees",
    img: Image3,
  },
  {
    title: "From Gaza to Los Angeles, our leaders have set the world on fire",
    img: Image4,
  },
  {
    title: "SA20 Eliminator SEC in control, JSK chase stutters",
    img: Image5,
  },
  {
    title:
      "Coldplay Breaks Taylor Swift’s Record Of Most-Attended Concert Tour",
    img: Image6,
  },
];

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 border rounded-lg overflow-hidden shadow-md">
          <img
            src={newsItems[0].img}
            alt={newsItems[0].title}
            className="w-full h-50 object-cover rounded-md"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{newsItems[0].title}</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 md:row-span-2 md:col-span-1 gap-4">
          {newsItems.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:row-span-2 md:col-span-1  gap-4">
          <div className="border p-2 rounded-lg shadow-md bg-gray-100 text-center">
            <h3 className="text-xl font-bold">Mega Mart Sale 40% OFF</h3>
            <img src={Tired1} alt="Ad" className="mx-auto my-4" />
          </div>
          <div className="border p-2 rounded-lg shadow-md bg-gray-100 text-center">
            <img src={Tired2} alt="Ad" className="mx-auto my-4" />
            <h3 className="text-xl font-bold">Tired Of Too Many ads?</h3>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-row-2 gap-4 ">
          {newsItems.slice(4).map((item, index) => (
            <div
              key={index}
              className="flex border rounded-lg overflow-hidden shadow-md " 
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-84 h-50 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
