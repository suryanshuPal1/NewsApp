import React from 'react'

const Slide = ({img,title,date}) => {
  return (
    <div className='flex flex-row py-5 '>
        <img src={img} alt="" className='size-20 mr-3'/>
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Slide