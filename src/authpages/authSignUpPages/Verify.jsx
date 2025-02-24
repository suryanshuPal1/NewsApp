import React from "react"; 
import editLogo from "../../assets/signUpPageImages/edit.png"
import callLogo from "../../assets/signUpPageImages/call.png"
import mailLogo from "../../assets/signUpPageImages/mail.png"


const Verify =()=>{
    return(
<div className="" >
    <div className="">
                <h2 className="text-3xl  justify-center font-bold text-blue-900  
                  p-10 text-center">Verify your account</h2>
                   <p className=" text-center  text-gray-500 ">Please sign in to your existing account</p>
                   
           </div> 
           <div className="mt-[70px] ml-[600px]  max-w-xs p-4 rounded-lg mt-4 text-center border border-[#7900BA]">
            <div className="flex items-center justify-center p-2 mb-2">
          <span>  <img src={callLogo} alt="call Logo" className="  w-5 "/> </span>
            <p className="text-gray-700 mx-6 text-sm md:text-base">+91 9876543210</p>
            <span> <img src={editLogo} alt="edit Logo" className="w-5" /> </span>
            </div>
            <button className="mt-2 w-40 bg-[#1C2059] text-white py-1 rounded-lg">
            Select Phone
          </button>
           </div>
           <div className="mt-[69px] ml-[600px]  max-w-xs p-4 rounded-lg mt-4 text-center border border-[#7900BA]">
           <div className="flex items-center justify-center p-2 mb-2">
           <span>  <img src={mailLogo} alt="mail Logo" className="  w-5 "/> </span>
           <p className="text-gray-700 mx-6 text-sm md:text-base">techno@gmail.com</p>
           <span> <img src={editLogo} alt="edit Logo" className="w-5" /> </span>
            </div>
            <button className="mt-2 w-40 bg-[#1C2059] text-white py-1 rounded-lg">
            Select Email
          </button>
           </div>
           <p className="text-gray-500 text-sm text-center w-[310px] ml-[600px] mt-9 px-4">
          Make sure you have access to your selected option to receive the code.
        </p>
        <button className="mt-10 ml-[550px] w-full max-w-sm bg-[#1C2059] text-white py-2 rounded-lg">
          Continue
        </button>
           
</div>


    )
}
export default Verify;