import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Slide from '../Components/Card/Slide';

const Technology = () => {
  const [budgetdata, setBudgetData] = useState();
useEffect(() => {
      const fetch = async()=> {
        const response = await axios.get('https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/getallnews')
        console.log(response.data)
        setBudgetData(response.data.news)
      }
      fetch()
    }, [])
    
  return (
    <div className='m-5'>
        {budgetdata &&  budgetdata.map((element,id)=>(
            <Slide id={id} img={element.avatar} title={element.title} date={element.date} />
        ))}
    </div>
  );
}

export default Technology