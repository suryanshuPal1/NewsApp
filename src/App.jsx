import { Routes, Route, useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react';

 import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import MainHomePage from './Pages/MainHomePage';
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';

import './App.css';
import DailyReports from './Pages/SubDomain/DailyReports';
import EditorPack from './PagesOfHome/EditorPack';
import MostRead from './PagesOfHome/MostRead';
import TopNews from './PagesOfHome/TopNews';
import Crime from './Components/Home/Crime';
import InnerCrime from './Components/Home/InnerCrime';
import Login from './authpages/authLoginPages/Login';
import Signup from './authpages/authSignUpPages/Signup';
import ForgetPassword from './authpages/authLoginPages/ForgetPassword';
import PassVerification from './authpages/authLoginPages/PassVerification';
import SingleNews from './Pages/Singlenews';
import NewsList from './Pages/NewsList';

import AboutUs from './Pages/AboutUs';
import TrendingTopics from './Pages/TrendingTopics';

function App() {
  const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const role = useSelector((state) => state.auth.role) 
  useEffect(()=>{
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token")&&
      localStorage.getItem("role") 
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  },[]) 

  return (
    <div className="bg-gray-100 min-h-screen">
      {isLoggedIn && <Logo />}
      {/* {isLoggedIn && <Navbar />} */}
      {/* {console.log(isLoggedIn)} */}

      <Routes>
        {isLoggedIn ? (<>
          <Route path="/" element={<MainHomePage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/daily-report" element={<DailyReports />} />
          <Route path="/editor-pack" element={<EditorPack />} />
          <Route path="/most-read" element={<MostRead />} />
          <Route path="/top-news" element={<TopNews />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/innercrime" element={<InnerCrime />} />
          <Route path="/budget-2025" element={<Budget />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/trending-topics" element={<TrendingTopics />} />
          <Route path="/singlenews" element={<SingleNews/>} />
          <Route path="/newslist" element={<NewsList/>} />
          
        </>):(<>
          <Route path="/log-in" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/password-verification" element={<PassVerification />} />
        </>)}
                
      </Routes>

      {/* Hide Footer when on Login Page */}
      {isLoggedIn && <Footer />}

      {/* <Signup/> */}
    </div>
  );
}

export default App;
