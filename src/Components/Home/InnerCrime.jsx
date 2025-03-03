import React from 'react';
import innercrime1 from '../../assets/crime/innercrime1.png';

export default function InnerCrime() {  
  return (  
    <div className="max-w-6xl mx-auto w-full px-10">  
      <h2 className="text-gray-800 text-lg font-bold">Crime 2025</h2>  
      <h1 className="text-2xl font-bold mt-2">  
        India: Canada creating ‘environment for illegal migration and crime’  
      </h1>  
      <p className="text-gray-500 text-sm mt-1">02, Jan, 2025</p>  

      <div className="flex flex-col md:flex-row mt-4 items-start ">  
        {/* Text Section */}  
        <div className="flex-1 min-w-0 md:pr-4">  
          <p className="text-gray-700">  
            India has recently accused Canada of interfering in its internal affairs, alleging that such actions have  
            fostered an environment conducive to illegal migration and organized criminal activities. This assertion was made  
            in response to a Canadian inquiry commission report that suggested India was meddling in Canada's domestic  
            matters.  
          </p>  
          <p className="text-gray-700 mt-2 w-full">  
            The Ministry of External Affairs (MEA) of India issued a statement emphasizing that Canada’s consistent  
            interference has led to challenges, including illegal migration and organized crime. The MEA firmly rejected the  
            insinuations made in the Canadian report and expressed expectations that Canada would address and dismantle the  
            support systems enabling such illegal activities.  
          </p> 
           
        </div>  

        {/* Image Section */}  
        <div className="flex-1 min-w-0">  
          <img  
            src={innercrime1} 
            alt="India and Canada flags"  
            className="w-full h-auto object-cover rounded-lg"  
          />  
        </div>  
      </div>  

      <p className="text-gray-700 mt-6">  
        This development adds to the existing diplomatic tensions between the two nations. In recent years, there have  
        been several incidents highlighting the perils of illegal migration between Canada and the United States, often  
        involving Indian nationals. For instance, in January 2022, a tragic event occurred where an Indian family froze  
        to death while attempting to cross the Canada-U.S. border, underscoring the severe risks associated with human  
        smuggling operations.  
      </p>  
      <p className="text-gray-700 mt-4">  
        The diplomatic strain further intensified in October 2024 when Canada expelled six Indian diplomats, alleging  
        their involvement in serious criminal activities, including homicides and coercion within Canada. The Royal  
        Canadian Mounted Police (RCMP) claimed that Indian government officials were linked to various violent incidents  
        targeting Canadian residents of Indian descent.  
      </p>  
      <p className="text-gray-700 mt-4">  
        These events highlight the complex and often contentious relationship between India and Canada, with both  
        nations expressing concerns over issues of illegal migration, organized crime, and alleged interference in  
        domestic affairs.  
      </p>  
    </div>  
  );  
}