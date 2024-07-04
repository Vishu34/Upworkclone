import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Jobsemp } from "../components/contractor/Jobsemp";
import { Laborer } from "../components/contractor/Laborer";
import axios from "axios";
import { UseContextuser } from "../components/Contextuser";

export const Cont = () => {

   const{UserId}=UseContextuser();
    const [jobs, showjobs]=useState(true);

    const [data,setdata]=useState([]);
   
console.log(data)

    useEffect(() => {
        const fetchdata = async () => {
         
   ;
          
          try {
            const res = await axios.get(`http://localhost:3400/getemplyee`);
    
            if (res.status === 201) {
              const { message, data } = await res.data;
              console.log(data);
setdata(data)
              
            } else {
              console.log("data nahi aaya hai");
            //   window.location.href="/sign-in"
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchdata();
      }, [ ]);
    
      
      
    //   const Labdata=labdata?.filter((elm)=>
    //     elm.userType==="labor")

     // Output: 'example'
    

  return (
    <>
      <section className="space-y-4  CEL-width pt-20">

     
        {/* second top nav for top jobs */}
        <nav className="Top-jobs flex gap-5 justify-between  items-center">
          <ul>
            <li className="font-medium">Top Jobs</li>
          </ul>
          <ul className="flex gap-5">
            <li className="want text-black">Want to hire</li>
            <li className="want text-white">Want to work</li>
          </ul>
        </nav>



         {/* search headernav */}

<nav className="p-5">
    <ul className="flex justify-between items-center">
        
        <li>
            <ul className="flex items-center gap-10">
            <li className="text-sm px-5 py-2 rounded-full font-medium elm-btn p-0  cursor-pointer" onClick={()=>showjobs(true)}>Employee</li>
        <li className="text-sm px-5 py-2 rounded-full font-medium elm-btn p-0  cursor-pointer" onClick={()=>showjobs(false)}>Laborer</li>
            </ul>
        </li>
        <li className="relative">
            <input type="search" placeholder="search here" className="search-input "/>
            <FaSearch className="absolute top-4 right-5 text-sm"/>
            
        </li>
    </ul>
</nav>

       
       {
   jobs ? <Jobsemp data={data}/> : <Laborer/>
       }
        

{/* review */}


        <div className="review ">
  
  <h1>Your reviews</h1>

  <ul className="space-y-3">
  <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Recruiter jobs
                  </div>
                </li>
<li>
<div className="revew-circle w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br  border-[10px] border-b-blue-400 border-r-green-400">
</div>
</li>
                <li>
                
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Customer reviews
                  </div>
                </li>
  </ul>
        </div>
      </section>
    </>
  );
};
