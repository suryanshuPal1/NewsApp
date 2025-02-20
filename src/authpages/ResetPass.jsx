import React,{useState} from 'react'
import  EyeIcon from '../assets/loginPageImages/eye-open.png'
import  EyeOffIcon from '../assets/loginPageImages/eye.png'
import resetPass from '../assets/loginPageImages/resetPass.png'

const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:flex px-5 h-screen">
      <div className="bg-white rounded-lg shadow-lg border border-[#878787] min-w-100 lg:w-[28%] border-zinc-400 m-4">
        <div className="p-6 space-y-4 sm:p-8">
          <p className="py-2 text-xl text-[#282828]">Welcome back !</p>
          <h1 className="text-xl mb-1 font-semibold md:text-2xl">Reset Password</h1>
          <p className="text-sm text-[#282828]">
            Set a new password to your account
          </p>
          <form className="flex justify-center flex-col" action="#">
            <div className="lg:mb-6 mb-[2%]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <img src={EyeOffIcon} className="w-6" />
                  ) : (
                    <img src={EyeIcon} className="w-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="lg:mb-6 mb-[2%]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <img src={EyeOffIcon} className="w-6" />
                  ) : (
                    <img src={EyeIcon} className="w-6" />
                  )}
                </button>
              </div>
            </div>
            {/* <div className="flex items-center justify-between mb-1.5 lg:mb-5 md:mb-2.5">
              <div className="flex items-start ">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 border-gray-600  focus:ring-primary-600  ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div className="ml-3 text-xs ">
                  <label for="remember ">Remember me</label>
                </div>
              </div>
              <a
                href="#"
                className="text-xs font-medium text-zinc-400 hover:underline"
              >
                Forgot password?
              </a>
            </div> */}
            <div className="flex items-center justify-end mb-1.5 lg:mb-5 md:mb-2.5">
                <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                  Go Back to<a href="#" className="pl-1 text-[#101450] font-medium hover:underline">Login</a>
                </p>
            </div>
            <button
              type="submit"
              className="lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
            >
              Login
            </button>
            <div>
              <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                Don’t have an Account ?{" "}
                <a
                  href="#"
                  className="font-medium hover:underline text-[#101450] "
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block lg:w-90 lg:ml-20">
        <img src={resetPass} alt="" />
      </div>
    </div>
  );
}

export default ResetPass