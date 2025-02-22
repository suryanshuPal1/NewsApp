import React from "react";
import panaLogo from "../../assets/signUpPageImages/pana.png"; // Ensure correct path

const Signup = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 ">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-[720px] w-[1200px]">
        {/* Left Side - Illustration */}
        <div className="w-1/2 flex items-center justify-center bg-white p-8">
          <img src={panaLogo} alt="pana Logo" className="w-[500px] " />
        </div>
       

        {/* Right Side - Signup Form */}
        <div className= "border-2 border-gray-500 rounded w-1/2  mt-4 mr-2.5 mb-3.5  p-8">
          <h2 className=" text-2xl mb-3.8  text-gray-700">Welcome</h2>
          <h3 className="text-2xl font-semibold mt-2">Sign up</h3>
          <p className="text-sm text-gray-500 mb-6">
            Join us today! Get the latest news at your fingertips.
          </p>

          <form>
            <div className="mb-8">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-600">User name</label>
              <input
                type="text"
                placeholder="Enter your user name"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your Password"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-8">
            Don’t have an Account?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
            <span className="text-[#0A0E4B] font-semibold"> Register</span> 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
