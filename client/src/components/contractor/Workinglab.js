import axios from 'axios';
import React, { useEffect } from 'react'
import { UseContextuser } from '../Contextuser';

export const Workinglab = () => {

    


  return (
   <>
    <section className="p-2  mt-5">

<div className="bg-gray-200 rounded-xl p-4">
    <div className="flex justify-between gap-5">
       
       <div className="flex gap-5">
       <div className='w-8 h-8'><img src="" alt='iamge' className="border border-black rounded-full w-[100%] h-[100%]" /></div>
        <h1 className='head'> John</h1>
        <p>user@gmal.com</p>
       </div>
        <button className="bid-price flex justify-end items-end">Add</button>
    </div>
    
    
</div>
</section>
   </>
  )
}
