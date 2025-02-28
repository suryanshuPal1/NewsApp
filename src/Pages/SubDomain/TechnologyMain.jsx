import React from 'react';
import Page2 from '../../assets/SubDomain/Page-2.png';

export default function TechnologyMain() {
  return (
    <div className="font-sans max-w-screen-lg mx-auto">
      {/* Top Section - Responsive Layout */}
      <div className="flex flex-col md:flex-row items-start p-4 md:p-8">
        {/* Left Column - Text Content (Smartphones) */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-5 md:mb-0">
          {/* Header */}
          <div className="flex items-center mb-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <span className="mr-2">←</span>
              <span>Technology</span>
            </a>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Tecno announces new smartphone, laptop series: All the details
          </h1>

          {/* Date */}
          <p className="text-sm text-blue-500 mb-6">02, Jan, 2025 00:38</p>

          {/* Content */}
          <p className="text-gray-700 mb-6">
            TECNO has recently expanded its product lineup by introducing new smartphone and laptop models, aiming to cater to a diverse range of consumer needs.
          </p>

          {/* Smartphones Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Smartphones:</h2>
            <p className="text-gray-700 mb-3">At IFA 2023 in Berlin, TECNO showcased its latest smartphones, including:</p>
            <ul className="list-disc list-inside text-gray-700 pl-5">
              <li className="mb-2">PHANTOM V Fold: A flagship foldable phone that exemplifies TECNO's innovation in smartphone design.</li>
              <li className="mb-2">CAMON 20 Premier 5G: A device that offers advanced camera capabilities and 5G connectivity.</li>
              <li className="mb-2">SPARK 10 Pro Magic Magenta Edition: A vibrant addition to the SPARK series, designed for the youth market.</li>
              <li className="mb-2">POVA 5 Pro 5G: A performance-oriented smartphone with 5G support.</li>
            </ul>
            <p className="text-gray-700 mt-3">These devices highlight TECNO's commitment to providing cutting-edge technology across various market segments.</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 py-5 mt-5 md:mt-10">
          <img
            src={Page2}
            alt="Newspapers"
            className="rounded-xl shadow-lg object-cover h-auto w-full"
          />
        </div>
      </div>

      {/* Bottom Section - Full Width (Laptops) */}
      <div className="w-full p-5">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Laptops:</h2>
        <p className="text-gray-700 mb-3">TECNO has also ventured into the laptop market with the launch of the MEGABOOK series:</p>
        <ul className="list-disc list-inside text-gray-700 pl-5">
          <li>MEGABOOK T1 2023 14-inch: Designed for Gen Z, this laptop features an ultra-slim 14.8mm profile, weighs only...</li>
        </ul>
      </div>
    </div>
  );
}
