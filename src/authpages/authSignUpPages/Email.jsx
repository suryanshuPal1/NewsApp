import React from "react";
import undrawLogo from "../../assets/signUpPageImages/undraw.png"
const Email =()=>{
    return(
        <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full'>
                <div className='m-4'><img src={undrawLogo} alt="" className='size-70'/></div>
                <div className="bg-white rounded-lg m-4 p-1">
                    <div className="p-6 space-y-4 sm:p-8">
                            <h1 className="text-xl text-[#101450] mb-4 font-semibold md:text-2xl">
                            Email Verification
                            </h1>
                            <p className='text-sm text-[#282828] max-w-100'>
                                We've sent an verification to <a href='#' className="font-semibold text-[#101450]">arun14@gmail.com</a> to verify your email address and activate your account.
                            </p>
                            <form className="flex justify-center flex-col" action="#">
                                <div>
                                    <label for="otp" className="block mb-2 text-zinc-800 text-sm font-medium">Enter your Verification Code</label>
                                    <input type="otp" name="otp" id="otp" 
                                    className="border mb-1 border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter Verification Code..." required="">
                                    </input>
                                </div>
                                <div className="flex items-center justify-start mb-1.5 lg:mb-5 md:mb-2.5">
                                {/* <a href="#" className="text-xs font-medium text-zinc-400 hover:underline">LogIn</a> */}
                                    <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                                        Didn’t receive any code<a href="#" className="pl-1 text-[#101450] font-medium hover:underline">Resend Code</a>
                                    </p>
                                </div>
                                <button type="submit" className="my-4 lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Verify My Email</button>
                            </form>
                        </div>
                    </div>
            </div>

    )
}
export default Email;