import React from 'react'

const Slide2 = ({img,title,data,date}) => {
  return (
    <div className='flex flex-row py-5 m-4'>
        <img src={img} alt="" className='size-20 mr-3'/>
        <div>
            <h2>{title}</h2>
            <p>{data}</p>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Slide2;