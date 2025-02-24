import React ,{useState} from "react";
// import loginImg from '../../assets/loginPageImages/loginImg.png'
import  EyeIcon from '../../assets/loginPageImages/eye-open.png'
import  EyeOffIcon from '../../assets/loginPageImages/eye.png'
import panaLogo from "../../assets/SignuppageImages/pana.png"; // Ensure correct path

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false); 
  return (
    <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex h-full'>
            
            <div className="lg:min-w-100 bg-white rounded-lg min-w- shadow-lg border border-[#878787] border-zinc-400 m-4 p-1">
                <div className="p-6 space-y-4 sm:p-8">
                    <p className='py-2 text-xl text-[#282828]'>Welcome</p>
                        <h1 className="text-xl mb-1 font-semibold md:text-2xl">
                              Sign up 
                        </h1>
                        <p className='text-sm text-[#282828]'>Join us today! Get the latest news at your fingertips.</p>
                        <form className="flex justify-center flex-col" action="#">
                              <div className='lg:mb-6 mb-[6%]'>
                                  <label for="email" className="block mb-2 text-zinc-800 text-sm font-medium">Email</label>
                                  <input type="email" name="username" id="email" 
                                  className="border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your email" required="">
                                  </input>
                              </div>
                              <div className='lg:mb-6 mb-[6%]'>
                                  <label for="username" className="block mb-2 text-zinc-800 text-sm font-medium">Username</label>
                                  <input type="username" name="username" id="username" 
                                  className="border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your username" required="">
                                  </input>
                              </div>
                              <div className='mb-2'>
                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                                        Password
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
                                         {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                      </button>
                                    </div>
                              </div> 
                              <div className='mb-2'>
                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                                        Confirm Password
                                  </label>
                                    <div className="relative">
                                      <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                         className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Confirm your password"
                                        required
                                      />
                                     
                                      <button
                                         type="button"
                                         onClick={() => setShowPassword(!showPassword)}
                                         className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                      >
                                         {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                      </button>
                                    </div>
                              </div> 
                              <div className="flex items-center justify-between">
                                  <div className="flex items-start ">
                                      <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" 
                                        className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 border-gray-600  focus:ring-primary-600  ring-offset-gray-800" required="">
                                        </input>
                                      </div>
                                      <div className="ml-3 text-xs ">
                                        <label for="remember " >Remember me</label>
                                      </div>
                                  </div>
                                  <a href="#" className="text-xs font-medium text-zinc-400 hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="my-4 lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Login</button>
                            <div>
                            <p className="text-sm font-light text-black flex justify-center border">
                                  Already have an Account ? <a href="#" className="font-medium hover:underline text-[#101450] "> login</a>
                            </p>
                            </div>
                        </form>
                  </div>
            </div>
    
            <div className='m-4'>
              <img src={panaLogo} alt="" className='size-70'/>
            </div>
            
    </div>
  );
};

export default Signup;
