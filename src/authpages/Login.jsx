import React from 'react'
import loginImg from '../assets/loginPageImages/loginImg.png'

const Login = () => {
  return (
    <div className='flex flex-col pt-20 items-center justify-center sm:flex-row sm:flex px-5'>
        <div className="bg-white w-94 rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0  border-zinc-400">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <p className='py-2 text-xl'>Welcome back !</p>
                      <h1 className="text-xl mb-1 font-semibold leading-tight tracking-tight md:text-2xl">
                          Sign in to 
                      </h1>
                      <p className='text-sm'>Welcome back! Stay informed, stay ahead.</p>
                      <form className="flex justify-center flex-col space-y-4 md:space-y-6" action="#">
                          <div>
                              <label for="email" className="block mb-2 text-zinc-800 text-sm font-medium">Username</label>
                              <input type="email" name="email" id="email" className="border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your username" required="">
                              </input>
                          </div>
                          <div>
                              <label for="password" className="block mb-2 text-sm text-zinc-800 font-medium">Password</label>
                              <input type="password" name="password" id="password" placeholder="Enter your password" className=" border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required="">
                              </input>
                          </div>
                          <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 border-gray-600  focus:ring-primary-600  ring-offset-gray-800" required="">
                                    </input>
                                  </div>
                                  <div className="ml-3 text-xs">
                                    <label for="remember" >Remember me</label>
                                  </div>
                              </div>
                              <a href="#" className="text-xs font-medium text-zinc-400 hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Sign in</button>
                        <div>
                        <p className="text-sm font-light text-gray-500 text-gray-400">
                              Don’t have an account yet? <a href="#" className="font-medium hover:underline">Register</a>
                        </p>
                        </div>
                    </form>
                </div>
            </div>
        <div className='w-100'><img src={loginImg} alt=""/></div>
    </div>
  )
}

export default Login;