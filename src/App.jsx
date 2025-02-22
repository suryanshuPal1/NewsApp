import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import Technology from './Pages/Technology/Technology';
import TopVideos from './Pages/TopVideos/TopVideos';
import TopNews from './Pages/TopNews/TopNews';
import DailyReports from './Pages/DailyReports/DailyReports';
import './App.css';


function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Logo />
      <Navbar />
    <Router>
      <Hero />
      <DailyReports />
      <Technology />  
      <TopVideos />
      <TopNews />
   </Router>
   <Footer />
   

       
</div>
  )
}

export default App
