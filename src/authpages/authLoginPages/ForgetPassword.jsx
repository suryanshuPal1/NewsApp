import React from 'react'
import { Link } from 'react-router-dom';
import ForgetPass from '../../assets/loginPageImages/ForgetPass.png'


const ForgetPassword = () => {
  return (
    <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full'>
            <div className="bg-white rounded-lg shadow-lg border border-[#878787] border-zinc-400 m-4 p-1">
                <div className="p-6 space-y-4 sm:p-8">
                    <p className='py-2 text-xl text-[#282828]'>Welcome back !</p>
                        <h1 className="text-xl mb-1 font-semibold md:text-2xl">
                              Forget Password 
                        </h1>
                        <p className='text-sm text-[#282828]'>Enter your registered email or Phone number
                        to receive password reset link</p>
                        <form className="flex justify-center flex-col" action="#">
                              <div>
                                  <label for="username" className="block mb-2 text-zinc-800 text-sm font-medium">Enter Email address/Phone Number</label>
                                  <input type="username" name="username" id="username" 
                                  className="border mb-1 border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="arun1416@gmail.com" required="">
                                  </input>
                              </div>
                            <div className="flex items-center justify-end mb-1.5 lg:mb-5 md:mb-2.5">
                                <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                                  Go Back to<Link to='/log-in' className="font-medium hover:underline text-[#101450] ">login</Link>
                                </p>
                            </div>
                            <button type="submit" className="my-4 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Login</button>
                            <div>
                            <p className="text-sm font-light flex justify-center">
                                  Don’t have an Account ? <Link to="/sign-up" className="font-medium hover:underline text-[#101450] ">Register</Link>
                            </p>
                            </div>
                        </form>
                    </div>
                </div>
            <div className='m-4'><img src={ForgetPass} alt="" className='size-70'/></div>
        </div>
  )
}

export default ForgetPassword