import React, { useEffect, useState } from 'react'
import { Alllab } from './Alllab';
import { Workinglab } from './Workinglab';
import axios from 'axios';

export const Laborer = () => {
    const [lab, showlab]=useState(true);
    const [labdata ,  setlabdata]=useState([]);
    useEffect(() => {
        const fetchdata = async () => {
         
    
          
          try {
            const res = await axios.get("http://localhost:3400/getuser1", {
             
            });
    
            if (res.status === 201) {
              const { message, data } = await res.data;
              console.log(data);
   setlabdata(data)
              
            } else {
              console.log("data nahi aaya hai");
            //   window.location.href="/sign-in"
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchdata();
      }, []);
    
    
      const Labdata=labdata.filter((elm)=>{
        return elm.userType==="labor"
      })

      console.log(Labdata)

  return (
   <>

    

    <section>
    <ul className='flex gap-5'>
        <li  className=' el-btn cursor-pointer' onClick={()=>showlab(true)}>All</li>
        <li  className='el-btn cursor-pointer' onClick={()=>showlab(false)}>Working</li>
    </ul>
        
          
          {
            lab ? <Alllab data={Labdata}/>: <Workinglab/>
          }
        </section>
   </>
  )
}
