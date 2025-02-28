import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import GooglePlay from "../../assets/Footer/google.png";
import AppStore from "../../assets/Footer/apple.png";



const links = [
  { name: "Contact Us", path: "/contactus" },
  { name: "About Us", path: "/about-us" },
  { name: "Advertise With Us", path: "/advertise" },
  { name: "Privacy & Cookies Notice", path: "/privacy" },
  { name: "Complaint Redressal", path: "/complaint" },
  { name: "Trending Topics", path: "/trending-topics" },
  {name:"Single news", path:"/singlenews"},
   {name:"NewsList", path:"Newslist"},
  
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-400 text-sm">
      <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/** Sections **/}
        {[
          {
            title: "Network",
            links: [
              "TNHindi.com",
              "TNMarathi.com",
              "TNTelugu.com",
              "TNKannada.com",
              "TNBangla.com",
              "TNGujarati.com",
              "TNPunjabi.com",
              "TNAssam.com",
              "TNMalayalam.com",
              "TNTamil.com",
              "Trends.com",
              "Money.com",
              "NewsPlus.com",
            ],
          },
          {
            title: "States & Cities News",
            links: [
              "Andhra Pradesh",
              "Bengaluru",
              "Delhi",
              "Hyderabad",
              "Karnataka",
              "Kerala",
              "Mumbai",
              "Tamil Nadu",
              "Telangana",
            ],
          },
          {
            title: "Entertainment",
            links: [
              "Bigg Boss",
              "Bollywood",
              "Hollywood",
              "Movie Reviews",
              "OTT",
              "Regional Cinema",
              "Television",
            ],
          },
          {
            title: "Lifestyle",
            links: ["Beauty", "Fashion", "Food & Drink", "Relationships", "Spirituality", "Travel", "Fitness"],
          },
          {
            title: "Sports",
            links: ["Cricket", "Olympics", "UFC", "WWE", "Kabaddi", "Football", "Tennis", "Other Sports"],
          },
          {
            title: "Popular Categories",
            links: [
              "India",
              "Technology",
              "Auto",
              "Education / Career",
              "Business",
              "Viral",
              "Crime",
              "Opinion & Analysis",
              "Videos",
              "Photos",
              "Web Stories",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h1 className="font-bold text-white mb-2">{section.title}</h1>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/** Trending Topics **/}
      <div className="container mx-auto px-6 py-6">
        <h1 className="font-bold text-white mb-2">Trending Topics</h1>
        <div className="flex flex-wrap gap-4">
          {["ND vs ENG LIVE Score", "Delhi Election 2025", "Delhi CM List", "PAPON Concert Tickets", "Income Tax Calculator", "Artificial Intelligence", "Horoscope Today", "Hindu Calendar 2025", "Tamil Calendar 2025", "Malayalam Calendar 2025", "Marathi Calendar 2025", "Join The News on WhatsApp"].map((topic, i) => (
            <span key={i} className="bg-blue-800 px-3 py-1 rounded-md text-gray-300 hover:text-white cursor-pointer">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/** Social Media & Apps **/}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-end gap-10 py-4 border-t border-blue-800 px-6">
        <div className="flex items-center gap-4">
          <h3 className="text-sm ">Follow Us On</h3>
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
            <Icon key={i} className="text-white text-xl cursor-pointer hover:text-gray-300" />
          ))}
        </div>
        <div className="flex items-center gap-4 md:mt-4">
          <img src={GooglePlay} alt="Google Play" className="h-10 cursor-pointer" />
          <img src={AppStore} alt="App Store" className="h-10 cursor-pointer" />
        </div>
      </div>

      {/** Footer Links **/}
      <div className="container mx-auto px-6 py-4 border-t border-blue-800 text-center md:text-left">
      <ul className="flex flex-wrap justify-center md:justify-start gap-4">
        {links.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </footer>
  );
}
