import React from "react";
import undrawLogo from "../assets/undraw.png"
const Phone =()=>{
    return(
        <div className="flex h-screen items-center justify-center bg-gray-100 ">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-[720px] w-[1200px]">
        

         <div className="flex item-center justify-center p-10 mt-8 " >
            <img src={undrawLogo} alt="undraw Logo" className="w-[400px] h-[450px] "/>
         </div>
         <div className="w-1/2 mt-10 ">
            <h2 className="text-3xl font-bold flex justify-center p-9 text-blue-900 text-bold">
                Phone Verification </h2>
                <p className="text-gray-600 w-[400px] p-2 ml-[100px]">We're sent an verification to <span className="text-[#0A0E4B] font-semibold">(+91)1234567890</span>  to verify your email address and active your account.</p>
         
         <div className=" mt-[60px] ">
            <input type="text"  placeholder="  Enter Verification code.... " className="w-[400px] h-[50px] ml-[90px] border rounded-md "/>
            <p className="p-8  ml-[50px] text-gray-600">Didn't receive any code! <span className="text-[#0A0E4B] font-semibold"> Resend code </span></p>
            <div className="mt-10">
                <button className="bg-blue-900 text-white w-[450px] h-[50px] ml-[60px]  rounded-md hover:bg-blue-700 transition">Verify My phone</button>
            </div>
            </div>
        
            </div>
         
        </div>
      </div>

    )
}
export default Phone;