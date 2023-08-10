import React from 'react'
import Typography from '../others/Typography/Typography'
import "../../App.css"

const MarsBot = () => {
  return (
    <div className='w-full'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 justify-center ">
           <img src="./icons/Ellipse 3.png" alt="" className='w-7' />
           <Typography  classes={"text-[#17233B] font-bold text-3xl"} text="Mars Bot"/>
        </div>
        <div className="">
            <button className='py-2 px-6 text-[#17233B] font-semibold border shadow-md rounded-lg'>+ Add</button>
        </div>
      </div>
    </div>
  )
}

export default MarsBot
