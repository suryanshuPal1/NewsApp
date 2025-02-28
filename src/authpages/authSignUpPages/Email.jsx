import React, { useState } from "react";
import axios from "axios";
import undrawLogo from "../../assets/signUpPageImages/undraw.png";

const Email = () => {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        axios.post("https://your-api.com/verify-otp", { otp: otp })
            .then((response) => {
                if (response.data.success) {
                    setMessage("OTP verification successful! Your account is now activated.");
                } else {
                    setError("Invalid OTP. Please try again.");
                }
            })
            .catch(() => {
                setError("Something went wrong. Please try again.");
            });
    };

    return (
        <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full'>
            <div className='m-4'><img src={undrawLogo} alt="" className='size-70' /></div>
            <div className="bg-white rounded-lg m-4 p-1">
                <div className="p-6 space-y-4 sm:p-8">
                    <h1 className="text-xl text-[#101450] mb-4 font-semibold md:text-2xl">
                        Email Verification
                    </h1>
                    <p className='text-sm text-[#282828] max-w-100'>
                        We've sent a verification email to <a href='#' className="font-semibold text-[#101450]">arun14@gmail.com</a> to verify your email address and activate your account.
                    </p>
                    <form className="flex justify-center flex-col" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="otp" className="block mb-2 text-zinc-800 text-sm font-medium">
                                Enter your Verification Code
                            </label>
                            <input
                                type="text"
                                name="otp"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="border mb-1 border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter Verification Code..."
                                required
                            />
                        </div>
                        {message && <p className="text-green-600 text-sm">{message}</p>}
                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        <div className="flex items-center justify-start mb-1.5 lg:mb-5 md:mb-2.5">
                            <p className="text-sm font-light text-gray-500 flex justify-center">
                                Didn’t receive any code? <a href="#" className="pl-1 text-[#101450] font-medium hover:underline">Resend Code</a>
                            </p>
                        </div>
                        <button type="submit" className="my-4 lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5">
                            Verify My Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Email;