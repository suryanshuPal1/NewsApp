import React,{ useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/loginPageImages/loginImg.png'
import  EyeIcon from '../../assets/loginPageImages/eye-open.png'
import  EyeOffIcon from '../../assets/loginPageImages/eye.png'
import {useDispatch} from "react-redux"
import {authActions} from "../../store/auth"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    username:"", 
    password:"",
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const submit = async () => {
    try{
      if(
        values.username === ""||
        values.password === ""
      ){
        setError ("All field are required");
      }else{
        
        const response = await axios.post("https://news-portal-backend-code-1.onrender.com/api/v1/users/signin", values)
        // console.log(response.data)
        alert(response.data.message)
        dispatch(authActions.login())
        dispatch(authActions.changeRole(response.data.role))
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("role", response.data.role)
        navigate("/")
      }
      }catch (error) {
        // console.log(error)
        alert(error.response?.data?.message || "Something went wrong!");
      }
  }
  
  return (
    <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full'>
        
        <div className="lg:min-w-100 bg-white rounded-lg min-w- shadow-lg border border-[#878787] border-zinc-400 m-4 p-1">
            <div className="p-6 space-y-4 sm:p-8">
                <p className='py-2 text-xl text-[#282828]'>Welcome back !</p>
                    <h1 className="text-xl mb-1 font-semibold md:text-2xl">
                          Sign in to 
                    </h1>
                    <p className='text-sm text-[#282828]'>Welcome back! Stay informed, stay ahead.</p>
                    <form className="flex justify-center flex-col" action="#"  onSubmit={submit}>
                          <div className='lg:mb-6 mb-[6%]'>
                              <label htmlFor="username" className="block mb-2 text-zinc-800 text-sm font-medium">Username</label>
                              <input type="username" name="username" id="username" 
                              value={values.username} onChange={change}
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
                                    required value={values.password} onChange={change} 
                                     className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                  />
                                  {/* Eye Toggle Button*/}
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
                        <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                              Don’t have an Account ? <a href="#" className="font-medium hover:underline text-[#101450] ">Register</a>
                        </p>
                        </div>
                    </form>
              </div>
        </div>

        <div className='m-4'>
          <img src={loginImg} alt="" className='size-70'/>
        </div>
    </div>
  )
}

export default Login;


