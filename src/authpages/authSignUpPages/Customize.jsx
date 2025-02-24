import React from "react";
import Button from "../../components/CustomizePreferenceButton/Button";

import ai from "../../assets/preference/ai.png";
import business from "../../assets/preference/business.png";
import fashion from "../../assets/preference/fashion.png";
import finance from "../../assets/preference/finance.png";
import medicals from "../../assets/preference/medicals.png";
import movies from "../../assets/preference/movies.png";
import music from "../../assets/preference/music.png";
import politics from "../../assets/preference/politics.png";
import science from "../../assets/preference/science.png";
import sports from "../../assets/preference/sports.png";
import startup from "../../assets/preference/startup.png";
import tech from "../../assets/preference/tech.png";

const Customize = () => {
  const preferenceCategories = [
    {
      category: "Popular",
      titles: [
        { title: "Science", image: science },
        { title: "Sports", image: sports },
        { title: "Movies", image: movies },
        { title: "Politics", image: politics },
        { title: "AI", image: ai },
        { title: "Medicals", image: medicals },
      ],
    },
    {
      category: "Others",
      titles: [
        { title: "Tech", image: tech },
        { title: "Music", image: music },
        { title: "Fashion", image: fashion },
        { title: "Business", image: business },
        { title: "Finance", image: finance },
        { title: "Startup", image: startup },
        { title: "Others", image: 'blank' },
      ],
    },
  ];

  return (
    <div className="p-4 pt-[5%] md:px-40 lg:px-40 h-screen">
        <h1 className="text-center text-2xl font-semibold text-[#161954] mb-6">Customize your preference</h1>
      {preferenceCategories.map((categoryData, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold mb-3">{categoryData.category}</h2>
          <div className="flex flex-wrap gap-8">
            {categoryData.titles.map((item, id) => (
              <Button key={id} title={item.title} img={item.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Customize;
