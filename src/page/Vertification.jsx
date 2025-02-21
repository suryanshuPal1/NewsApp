import React from "react";
import thankuLogo from "../assets/thanku.png"

const Verification =()=>{
    return(
      <div className="">
        <div className="flex justify-center p-8">
            <img src={thankuLogo} alt="thanku Logo" className=" "/>
        </div>
        <div className="mt-6">
            <h2 className="text-center font-bold text-3xl text-[#0A0E4B] ">Verification Successful</h2>
            <div className="mt-6">
                <p className="text-center text-gray-600">Your Verification has been done successfully</p>
            </div>
            <div className="mt-8 ">
                <button className=" ml-[550px] bg-blue-950 text-white rounded-md hover:bg-blue-700 transition w-[450px] h-[50px]">Continue</button>
            </div>
        </div>
      </div>
    )
}
export default Verification;