import React, { useState, useEffect } from 'react';  
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import women from "./assets/women.png";

const Email = () => {  
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
        // Add logic to resend the verification code...  
    };  

    return (  
        <div className="flex min-h-screen">  
              
            <div className="w-1/2 bg-white p-10">  
                <h1 className="text-2xl font-bold mb-26 mt-15">Email Verification</h1>  
                <p className="mb-6">  
                    We’ve sent a verification to <strong>arun14@gmail.com</strong> to verify your email address and activate your account.  
                </p>  
                <input  
                    type="text"  
                    value={code}  
                    onChange={(e) => setCode(e.target.value)}  
                    placeholder="Enter Verification Code..."  
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"  
                />  
                <button className="bg-[#1C2059] text-white rounded-lg py-2 px-4 mb-2 w-full">Verify My Email</button>  
                <div className="flex justify-between items-center">  
                    <button  
                        className={`text-blue-600 ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}  
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

           {/* Image  */}
            <div className="w-1/2 bg-[#1C2059] text-white p-10 flex flex-col justify-center items-center">  
                
                <img src={women}alt="Illustration" className="" />  
            </div>  
        </div>  
    );  
};  

export default Email;
