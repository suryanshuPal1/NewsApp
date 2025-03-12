import React from "react";

const AdvertiseWithUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      
      
      <div className="relative flex-col w-full">
        <img
          src="/src/assets/footer/Advertise With us.png"
          alt="Advertise With Us"
          className="w-full h-full object-cover"
        />
         <section className="absolute top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/5 lg:max-w-4xl mx-auto bg-white p-4 md:p-6 mt-16 md:mt-32 shadow-lg rounded-md">
        <h3 className="text-lg md:text-xl font-semibold">Advertise With Us</h3>
        <p className="mt-2 text-sm md:text-base text-gray-700">
          The News's independent editorial stand and its reliable and balanced
          presentation of the news have over the years won serious attention and
          regard of the people who matter in India and abroad. We offer a wide
          range of multi-platform solutions to access a global audience who
          wants to understand and engage with the world.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-700">
          Contact our specialist now to help you build solutions that will
          exceed your expectations.
        </p>
        
        <h4 className="mt-6 text-base md:text-lg font-semibold">Get in Touch</h4>
        <ul className="mt-2 space-y-2">
        <div className="text-sm md:text-base">Advertisement Queries (Print)
          <li className="text-black hover:underline break-words">
           <a href="mailto:inetads@thehindu.co.in">inetads@thehindu.co.in</a> (Print)
          </li>
          </div>
          <div className="text-sm md:text-base">Advertisement Queries (Online-International)
          <li className="text-black hover:underline break-words">
           <a href="mailto:digital.global@thehindu.co.in">digital.global@thehindu.co.in</a> (Online - International)
          </li>
          </div>
          <div className="text-sm md:text-base">Advertisement Queries (Online)
          <li className="text-black hover:underline break-words">
           <a href="mailto:digital@thehindu.co.in">digital@thehindu.co.in</a> (Online)
          </li>
          </div>
          <div className="text-sm md:text-base">Advertisement Queries (International)
          <li className="text-black hover:underline break-words">
           <a href="mailto:international@thehindu.co.in">international@thehindu.co.in</a> (International)
          </li>
          </div>
        </ul>
      </section>
        
      </div>
      
     
    </div>
  );
};

export default AdvertiseWithUs;
