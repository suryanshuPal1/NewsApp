import React from 'react'

const Button = ({title,img}) => {
  return (
    <div className='hover:bg-[#101450] hover:text-white px-2 border rounded-sm m-1  min-w-20'>
        <button className='flex flex-row justify-center items-center p-1'>
          <span className='pr-4'>
            <img src={img} alt="" />
          </span>
          {title}
        </button>
    </div>
  )
}

export default Button