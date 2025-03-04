import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authActions } from "./store/auth"; 

import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo";
import Footer from "./Components/Footer/Footer";
import MainHomePage from "./Pages/MainHomePage";
import Budget from "./Components/Home/Budget";
import Technology from "./PagesOfHome/Technology";

import "./App.css";
import DailyReports from "./Pages/SubDomain/DailyReports";
import EditorPack from "./PagesOfHome/EditorPack";
import MostRead from "./PagesOfHome/MostRead";
import TopNews from "./PagesOfHome/TopNews";
import Crime from "./Components/Home/Crime";
import InnerCrime from "./Components/Home/InnerCrime";
import Login from "./authpages/authLoginPages/Login";
import Signup from "./authpages/authSignUpPages/Signup";
import ForgetPassword from "./authpages/authLoginPages/ForgetPassword";
import PassVerification from "./authpages/authLoginPages/PassVerification"; 
import Email from "./authpages/authSignUpPages/Email";  
import Verify from "./authpages/authSignUpPages/Verify";

import AboutUs from "./Pages/AboutUs";
import TrendingTopics from "./Pages/TrendingTopics";
import Slide2 from "./Components/Card/Slide2";

function App() {
  const [searchValue, setSearchValue] = useState(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const handleSearchChildData = (data) => {
    setSearchValue(data)
  } 
  console.log({searchValue})

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (userId && token && storedRole) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(storedRole));
    }
  }, [dispatch]); 
  

  return (
    <div className="bg-gray-100 min-h-screen">
      {isLoggedIn && <Logo />}
      {isLoggedIn && <Navbar getSearchData={handleSearchChildData} />} 
      {searchValue && searchValue.map((value)=>(
       <Slide2 img={value.avatar} title={value.catagory} data={value.content} date={value.date}/>
      ))}

      <Routes>
        {isLoggedIn  ? (
          <>
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
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/password-verification" element={<PassVerification />} /> 
            <Route path="/verify" element={<Verify />} />
            <Route path="/email" element={<Email />} /> 
          </>
        )}
      </Routes>

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
