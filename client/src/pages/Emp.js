import React, { useEffect, useState } from 'react'
import { Jobform } from '../components/employee/Jobform'
import axios from 'axios';
import ReactTimeago from 'react-timeago';

export const Emp = () => {



    const [job, showjob]=useState(false);

   const userId=localStorage.getItem('userId');


const[Empdata, setempdata]=useState([])

console.log(Empdata)

console.log(userId)
    useEffect(() => {
        const fetchdata = async () => {
          const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("tokenvishu="))
            ?.split("=")[1];
    
          console.log("toke is " + token);
          try {
            const res = await axios.get("http://localhost:3400/getuser", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (res.status === 201) {
              const { message, data } = await res.data;
              console.log(data);
setempdata(data)
localStorage.setItem('userId', data._id);
              
            } else {
              console.log("data nahi aaya hai");
            //   window.location.href="/sign-in"
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchdata();
      }, [userId  ]);
    
    
      useEffect(() => {
        const fetchdata = async () => {
         
    
          
          try {
            const res = await axios.get(`http://localhost:3400/getemplyee/${userId}`);
    
            if (res.status === 201) {
              const { message, data } = await res.data;
              console.log(data);

              
            } else {
              console.log("data nahi aaya hai");
            //   window.location.href="/sign-in"
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchdata();
      }, [userId , ]);
    
    
      const extractName = (email) => {
        const parts = email.split('@');
        return parts[0];
      };
      
      // Example usage:
      const email = 'example@example.com';
    

  return (
    <>
<section className='CEL-width space-y-4 pt-20'>


{/* hire local staff */}
<div className="emp-hire flex justify-between ">
    <h1 className='text-2xl font-medium'>Hire local staff now!</h1>
    <button className="emp-postjob" onClick={()=>showjob(true)}>Post Jobs</button>
</div>


{/* jobs  */}

<div className="flex  gap-5 items-center ">
   
   <div className="emp-tjobs w-[30%] flex justify-between">
   
   <div className="">
   <h1 className='emp-head'>Total no. of Jobs</h1>
    <p className='emp-paragh'>30</p>
   </div>
   <img src="note.png" alt='imag'/>
   </div>

   <div className="emp-activejob flex gap-5 w-[40%] justify-between">
   
   <div className="flex gap-1 items-first">
   <h1 className='emp-head flex'>Active Jobs</h1>
    <img src="pen.png" className='w-5 object-cover' alt='image' />
   </div>
    <div className="">
    <div className="flex items-center gap-5">
        <p className='emp-remain'></p>
        <p className='emp-paragh'>30 Remaining</p>
    </div>
    <div className="flex items-center gap-5">
        <p className='emp-remain1'></p>
        <p className='emp-paragh'>30 Signing</p>
    </div>
    </div>
   </div>


   {/* completed  */}

   <div className="emp-complete flex items-start w-[30%] justify-between">
    
    <div className="">
    <h1 className='emp-head'>Completed</h1>
    <p className='emp-paragh'>5</p>
    </div>
    <img src="right.png" className='w-10 object-cover' alt='image'/>
   </div>
</div>


<div className="grid grid-cols-2 gap-5">

{/* emp jobs */}
    <div className="emp-ongoing">
        <h1 className='head text-center p-4'>Ongoing  Jobs</h1>
        <ul className="space-y-4">
        <li className="emp-list">Name: ABC</li>
        <li className="emp-list">Budget: ₹ Finalised - 880/-</li>
        <li className="emp-list">Deadline: 6/7/24</li>
        <li className="emp-list">No of labours: 25</li>
        <li className="emp-list">Location: Delhi</li>
    </ul>
    </div>



 {
    Empdata?.empJobs?.map(elm=>{
        return (
            <>
            <div className="overview">

<div className="p-4">
    <p className='text-center head'>Overview</p>
    <div className="">
        <img src="man.png" className='w-8 mx-auto' alt='image' />

    </div>
    <h1 className=' text-3xl font-medium text-center'>Hi i am Employer</h1>
</div>


<div className="space-y-4">
<div className="emp-details">
<ul>
<li className="font-medium">Name: {elm.firstName}{elm.lastName}</li>
    <li className="font-medium">Age: {elm.age}</li>
    <li className="font-medium">Gender: {elm.gender}</li>
</ul>
</div>


<div className="emp-contact">
<h1 className='head'>Contact:</h1>
<ul>
            <li className="font-medium">Phone: {elm.phoneNumber}</li>
            <li className="font-medium">Email: {elm.email}</li>
        </ul>
</div>

<div className="emp-location">
<h1 className='head'>Location:</h1>
<ul>
            <li className="font-medium">Address: {elm.address}</li>
        </ul>
</div>
</div>
</div>
            </>
        )
    })
 }

</div>






{
    job ? <Jobform showjob={showjob} emp_id={userId}/> : null
}



{/* employee job posted */}


{
    Empdata?.empJobs?.map(elm=>{
        console.log(elm.conbid);
        console.log(elm.conbid.user)
        return (<>

            <div className="emp-details">

<div className="">
<h1 className='head'>Job Description:</h1>
    <p>{elm.jobDescription}</p>
    <h1 className='head'>Posted: <ReactTimeago date={elm.createdAt}/></h1>

   <div className="space-y-4">
   {
        elm.conbid?.map(elm=>{
            console.log(elm?.user?.email)
            return (
                <>
<div className="bg-white rounded-lg p-3 mt-10">

<div className="flex gap-5">
<p className='head'>{extractName(elm?.user?.email)}</p>
<p className='font-medium'>{elm?.user?.email}</p>
</div>

    
    <p>{elm.description}</p>
</div>

                </>
            )
        })
    }
   </div>



</div>
</div>
        </>)
    })
}

</section>

    </>
  )
}
