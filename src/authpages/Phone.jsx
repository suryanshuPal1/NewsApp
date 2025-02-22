import React, { useState, useEffect } from 'react';   
import './index.css';  
import women from "./assets/women.png";  

const Phone = () => {  
    const [code, setCode] = useState('');  
    const [timer, setTimer] = useState(30);  
    const [isResendDisabled, setIsResendDisabled] = useState(false);  

    useEffect(() => {  
        if (timer > 0 && isResendDisabled) {  
            const interval = setInterval(() => {  
                setTimer((prev) => prev - 1);  
            }, 1000);  
            return () => clearInterval(interval);  
        }  
        if (timer === 0) {  
            setIsResendDisabled(false);  
            setTimer(30);  
        }  
    }, [timer, isResendDisabled]);  

    const handleResend = () => {  
        setIsResendDisabled(true);  
        // Logic to resend the phone verification code goes here...  
    };  

    return (  
        <div className="flex min-h-screen">  
            {/* Left Side: Welcome Message with Illustration */}  
            <div className="w-1/2 bg-[#1C2059]  text-white p-21 flex flex-col justify-center relative">  
               
                <div className=" left-10">  
                    <img src={women} alt="Illustration" className="" />  
                </div>  
            </div>  

            {/* Right Side: Phone Verification */}  
            <div className="w-1/2 bg-white p-10 flex flex-col justify-center">  
                <h1 className="text-2xl font-bold mb-4">Phone Verification</h1>  
                <p className="mb-6">  
                    We’ve sent a verification to <strong>(+91) 12345 67890</strong> to verify your phone number and activate your account.  
                </p>  
                <input  
                    type="text"  
                    value={code}  
                    onChange={(e) => setCode(e.target.value)}  
                    placeholder="Enter Verification Code..."  
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"  
                />  
                <button className="bg-[#1C2059]  text-white rounded-lg py-2 px-4 mb-2 w-full">Verify My Phone</button>  
                <div className="flex justify-between items-center">  
                    <button  
                        className={`text-[#1C2059]  ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}  
                        onClick={handleResend}  
                        disabled={isResendDisabled}  
                    >  
                        {isResendDisabled ? `Resend (${timer}s)` : 'Resend'}  
                    </button>  
                    <p className="text-gray-500">  
                        Didn't receive any code? <span className="text-blue-600 cursor-pointer" onClick={handleResend}>Resend Code</span>  
                    </p>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Phone;