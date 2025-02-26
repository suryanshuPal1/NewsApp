import React, { useState } from "react";
import axios from "axios";
import editLogo from "../../assets/signUpPageImages/edit.png";
import mailLogo from "../../assets/signUpPageImages/mail.png";


const Verify = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendOtp = (email) => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage(""); // Reset message before sending OTP

    axios
      .post("https://newsportalbackend-crdw.onrender.com/api/otp/send-otp", { email })
      .then((response) => {
        setMessage(response.data.message);

      })
      .catch((error) => {
        setMessage(error.response?.data?.message || "Failed to send OTP");
      })
      .finally(() => {
        setLoading(false);
      });
  };



  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 p-10 text-center">
        Verify your account
      </h2>
      <p className="text-center text-gray-500">
        Please enter your email to receive OTP.
      </p>

      {/* Email Verification Card */}
      <div className="mt-6 max-w-xs p-4 rounded-lg text-center border border-[#7900BA]">
        <div className="flex items-center justify-center p-2 mb-2">
          <img src={mailLogo} alt="Mail Logo" className="w-5" />
          <input
            type="email"
            placeholder="Enter email"
            className="text-gray-700 text-sm md:text-base border rounded px-2 py-1 w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src={editLogo} alt="Edit Logo" className="w-5" />
        </div>
        <button
          onClick={() => sendOtp(email)}
          className="mt-2 w-40 bg-[#1C2059] text-white py-1 rounded-lg"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </div>

      {message && <p className="text-green-600 text-sm mt-4">{message}</p>}

      <p className="text-gray-500 text-sm text-center w-[310px] mt-9 px-4">
        Make sure you have access to your email to receive the code.
      </p>

      <button className="mt-10 w-full max-w-sm bg-[#1C2059] text-white py-2 rounded-lg">
        Continue
      </button>

    </div>
  );
};

export default Verify;