import React from "react";

const Budget = () => {
  return (
    <div className="p-4 md:p-6 bg-white-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
          {/* Left Column */}
          <div className="space-y-4 flex flex-col">
            <h2 className="text-xl font-bold">Budget 2025</h2>
            <div className="space-y-2">
              <h3 className="font-semibold">What’s New in Financial Literacy</h3>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Budget 2025: Rent a home or buy one? That’s...</h3>
              <p className="text-sm text-gray-600">
                Deciding between renting and buying a home is complex. Renting offers flexibility and potential tax...
              </p>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold">Union Budget: Trading in crypto? There is a big...</h3>
              <p className="text-sm text-gray-600">
                India’s finance act of 2022 has introduced a 30% tax on income from cryptocurrencies classified as virtual...
              </p>
            </div>
          </div>

          {/* Center Column - Wider */}
          <div className="md:col-span-2 flex flex-col">
            <img 
              src="/images/budget1.png" 
              alt="Budget 2025" 
              className="w-full h-auto rounded-md" 
            />
            <h2 className="text-lg font-bold mt-4">
              The Union Budget 2025, presented by Finance Minister Nirmala Sitharaman on February 1, 2025, has introduced several notable measures:
            </h2>
            <p className="text-sm text-gray-600 mt-2 flex-grow">
              The Union Budget 2025 has garnered significant attention for its focus on short-term economic relief measures, such as tax cuts for the middle class, while lacking substantial reforms aimed at long-term growth. Analysts have expressed concerns over the reduction in capital spending and infrastructure investment, which are crucial for sustainable economic development...
            </p>
          </div>

          {/* Right Column - Stick to Top */}
          <div className="space-y-4 flex flex-col self-start">
            <div>
              <img 
                src="/images/budget2.png" 
                alt="Tax wheels on office cars" 
                className="w-full h-auto rounded-md" 
              />
              <h3 className="font-semibold mt-2">Tax wheels on office cars</h3>
              <p className="text-sm text-gray-600">
                Many organisations provide a leased car or a company-owned car...
              </p>
            </div>
            <div>
              <img 
                src="/images/budget3.png" 
                alt="Mar-o-Lago" 
                className="w-full h-auto rounded-md" 
              />
              <h3 className="font-semibold mt-2">Mar-o-Lago! Stay the course on your retirement fund</h3>
              <p className="text-sm text-gray-600">
                Planning your retirement early can help secure your financial future...
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-t border-gray-300 my-6" />
        
        {/* Lower Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex space-x-4 items-start">
            <img 
              src="/images/budget5.png" 
              alt="Live news" 
              className="w-40 h-28 rounded-md" 
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-semibold mb-2">Budget 2025 Live: Make India rich again</h3>
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded self-start">Live</span>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <img 
              src="/images/budget4.png" 
              alt="Live news" 
              className="w-40 h-28 rounded-md" 
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-semibold mb-2">Budget 2025 Live: 10,000 seats will be added in medical</h3>
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded self-start">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;