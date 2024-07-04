import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

export const Labr = () => {
  return (
   <>
    <section className="space-y-4  CEL-width pt-20">

 <div className="grid grid-cols-2 gap-5">
    {/* bankinformation */}

    <div className="bank-box">
    <h1 className='head text-center'>Bank Information</h1>
        <ul className="space-y-3 mt-5">
            <li className="bank-list">Account  no :  1345776767544323670</li>
            <li className="bank-list">Bank name : canara bank </li>
            <li className="bank-list">Bank holder’s name - Ram Lal</li>
            <li className="bank-list">IFCF code - RAMLL4567</li>
        </ul>
    </div>

    {/* account holderimage name */}

    <div className="">
    <div className="bank-box1">
           
           <div className=" mx-auto">
           <img src=""  className=" bank-image mx-auto"alt='image'/>
           </div>
            <div className="">

                <div className="space-y-4">
                    <div className="flex gap-3 justify-between border-b-4">
                    
                    <div className=""><img src="att.png"  className=" bank-image"alt='image'/>
                    <h1 className='text-center'>Attendance</h1></div>
                    <div className=""><img src="line.png"  className=" bank-image"alt='image'/>
                    <h1 className='text-center'>Wage</h1></div>


                    
                    </div>

                    <div className="flex gap-3 justify-between">
                    
                    <div className=""><img src="graph.png"  className=" bank-image"alt='image'/>
                    <h1 className='text-center'>Attendance</h1></div>
                    <div className=""><img src="deal.png"  className=" bank-image"alt='image'/>
                    <h1 className='text-center'>Wage</h1></div>


                    
                    </div>
                </div>

                
            </div>
        </div>
    </div>
 </div>



 {/* month attendance */}

 <div className="grid grid-cols-2 gap-5">

   
 
 <div className="">
 
 <div className="flex gap-3 px-2">
 <div className="">
    <h1 className='month'>May</h1>
 </div>
 <div className="">
    <h1 className='month'>May</h1>
 </div>
 <div className="">
    <h1 className='month'>May</h1>
 </div>
 <div className="">
    <h1 className='month'>May</h1>
 </div>
 </div>
 <div className="bank-box space-y-4">

<div className="flex gap-5 attendance">

<h1 className='head font-medium day'>5 Mon</h1>


<div className="p-3">
<div className="flex justify-between gap-20 font-medium p-2">
<p className='w-[100%]'>Attendance</p>
<p className='w-[100%]'>p</p>
</div>
<div className="flex justify-between ">
<p className='w-[100%] payment'>Payment</p>
<p className='w-[100%] done'>Done</p>
</div>
</div>
</div>

<div className="flex gap-5 attendance">

<h1 className='head font-medium day'>5 Mon</h1>


<div className="p-3">
<div className="flex justify-between gap-20 font-medium p-2">
<p className='w-[100%]'>Attendance</p>
<p className='w-[100%]'>p</p>
</div>
<div className="flex justify-between ">
<p className='w-[100%] payment'>Payment</p>
<p className='w-[100%] notdone'>Done</p>
</div>
</div>
</div>
</div>
 </div>



{/* payment qr code */}
<div className="space-y-4">
    <div className="bank-box">
    <div className=" ">
       <img src="qr.png"  className=" mx-auto"alt='image'/>
       </div>
       <h1 className='head text-center'>Payment Qr</h1>
    </div>
    <div className="bank-box flex flex-col justify-center items-center align-middle space-y-2">
        <FaUser className='flex items-center justify-center text-6xl'/>
        <h1 className="dealer">Contract Dealer</h1>
    </div>
</div>
 </div>

    </section>
   </>
  )
}
