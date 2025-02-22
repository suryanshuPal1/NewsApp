import React, { useState, useEffect } from 'react';
import './index.css';
import women from './assets/women.png';

const Phone = () => {
  const [code, setCode] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (e) => setCode(e.target.value);

  const handleResend = () => {
    if (canResend) {
      setResendTimer(30);
      setCanResend(false);
      console.log('Resend verification code...');
    }
  };

  const handleVerify = () => console.log('Verifying code:', code);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
      <div className="w-full md:w-1/2 p-10">
        <h1 className="text-3xl font-bold mb-6">Phone Verification</h1>
        <p className="mb-4">
          We’ve sent a verification to <strong>(+91) 12345 67890</strong> to verify your phone number and activate your account.
        </p>

        <div className="relative mb-4 w-full">
          <input
            type="text"
            value={code}
            onChange={handleChange}
            placeholder="Enter Verification Code..."
            className="border border-gray-300 rounded-lg w-full p-3 pr-24"
          />
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sm ${
              canResend ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {canResend ? 'Resend Code' : `Resend (${resendTimer}s)`}
          </button>
        </div>

        <button
          onClick={handleVerify}
          className="bg-[#1C2059] text-white rounded-lg py-2 px-4 w-full mb-4"
        >
          Verify My Phone
        </button>
      </div>

      {/* Illustration Section */}
      <div className="hidden md:flex w-1/2 bg-[#1C2059] text-white p-10 justify-center items-center">
        <img src={women} alt="Phone Verification" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Phone;
