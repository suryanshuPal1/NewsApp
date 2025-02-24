import React from 'react'
import Hero from './MainPagesComponents/Hero'
import DailyReports from './MainPagesComponents/DailyReports'
import Technology from './MainPagesComponents/Technology'
import TopVideos from './MainPagesComponents/TopVideos'
import TopNews from './MainPagesComponents/TopNews'


const MainHomePage = () => {
  return (
    <div>
        <Hero />
        <DailyReports />
        <Technology />  
        <TopVideos />
        <TopNews />
    </div>
  )
}

export default MainHomePage