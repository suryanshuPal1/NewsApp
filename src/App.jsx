import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import Technology from './Pages/Technology/Technology';
import TopVideos from './Pages/TopVideos/TopVideos';
import TopNews from './Pages/TopNews/TopNews';
import DailyReports from './Pages/DailyReports/DailyReports';
// import DailyReports1 from './Pages/SubDomain/DailyReports';
// import Technology1 from './Pages/SubDomain/Technology';
// import Technology2 from './Pages/SubDomain/TechnologyMain';
// import DailyReports2 from './Pages/SubDomain/DailyReportsMain';

function App() {

  return (

    <div className="bg-gray-100 min-h-screen">
    <Router>
      <Logo />
      <Navbar />
        <Hero />
        <DailyReports />
        <Technology />  
        <TopVideos />
        <TopNews />
      <Footer />
      {/* <DailyReports1 />
    <Technology1 />
    <Technology2 />
    <DailyReports2 /> */}
   </Router>
   </div>
  )
}

export default App
