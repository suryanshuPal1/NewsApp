import { useState } from "react";

export default function Choice() {
  return (
    <div className="p-4 bg-white shadow-md ml-51 mr-6">
      {/* Top Navigation */}
      <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 text-sm text-black">
        {[
          "Home",
          "Astrology",
          "Entertainment",
          "Trending",
          "Education",
          "Sports",
          "Daily Digest",
          "Opinion",
          "For you",
          "Web Stories",
          "TN Games",
          "LiveTheNews",
          "Weather",
          "Latest News",
          "TNLS 2024",
          "Lifestyle",
          "Elections",
          "Videos",
          "Photos",
          "Cities",
          "Quickreads",
          "Analysis",
          "Following",
          "Science",
          "Product Hub",
          "Podcasts",
          "Technology",
        ].map((item, index) => (
          <p key={index} className="cursor-pointer hover:underline">
            {item}
          </p>
        ))}
      </nav>

      {/* Dropdown Section */}
      <div className="mt-4 flex flex-col gap-2 w-52">
        <Dropdown title="India News" options={["Delhi", "Mumbai", "Bengaluru", "Hyderabad"]} />
        <Dropdown title="Cricket" options={["IPL", "T20 World Cup", "ODI", "Test Matches"]} />
        <Dropdown title="World News" options={["Asia", "Europe", "America", "Middle East"]} />
      </div>
    </div>
  );
}

// Dropdown Component
function Dropdown({ title, options }) {
  const [selected, setSelected] = useState(title);

  return (
    <select
      className="border border-gray-400 p-2 rounded-md text-sm"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option disabled>{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
