import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UseContextuser } from '../Contextuser';

export const Alllab = ({data}) => {

    const {UserId}=UseContextuser();

    const [isAdded, setIsAdded] = useState(false);

    const [working, setWorking] = useState([]);

    console.log(working)
    
    const handleAddUser = async (lab_id) => {

        // setlabid(lab_id)
        try {
          const response = await axios.put(`http://localhost:3400/Addlabor`,{
            UserId,
            lab_id,
          });

          if(response.status===201){
            // alert("hab been added ")
            setIsAdded(true);
          }
          const updatedWorking = [...working, response.data.user];
          setWorking(updatedWorking);
        } catch (error) {
          
          console.log(error)
        }
      };

      const handleRemoveUser = async (lab_id) => {
        // setlabid(lab_id)

        console.log("lab ki id" , lab_id)
        try {
         const res = await axios.put(`http://localhost:3400/Removelab`,{
            UserId,
            lab_id
          });

          if(res.status===201){
            // alert("hab been added ")
            setIsAdded(true);
          }
          // Handle successful removal
        //   const updatedWorking = working.filter((user) => user._id !== userId);
        //   setWorking(updatedWorking);
        } catch (error) {
          // Handle error
          console.log(error);
        }
      };



      useEffect(() => {
        const fetchdata = async () => {
         
   ;
          
          try {
            const res = await axios.get(`http://localhost:3400/getlab/${UserId}`);
    
            if (res.status === 201) {
              const { message, data } = await res.data;
              console.log(data);
setWorking(data)
              
            } else {
              console.log("data nahi aaya hai");
            //   window.location.href="/sign-in"
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchdata();
      }, [working , setWorking ]);
    
const data32=working.filter(elm=>
  elm.lab_id==="663d12658ef0842ee38d5b82"
)




console.log(data32)

const emailnamefind=data.map(elm=>{
    return elm.email
})

console.log(emailnamefind)
const extractName = (emailnamefind) => {
    const parts = emailnamefind.split('@');
    return parts[0];
  };
const emailnamefind1 = 'example@example.com';
const name = extractName(emailnamefind1);
console.log(name);


  return (
    <section className="p-2 mt-5 space-y-4">

       
       {
        data?.map(elm=>{
            return (
                <>
                <div className="bg-gray-200 rounded-xl p-4">
            <div className="flex justify-between gap-5">
               
               <div className="flex gap-5">
               <div className='w-8 h-8'><img src="" alt='iamge' className="border border-black rounded-full w-[100%] h-[100%]" /></div>
                <h1 className='head'>{extractName(elm.email)}</h1>
                <p>{elm.email}</p>
               </div>

                {
                    isAdded? <button className="bid-price flex justify-end items-end" onClick={()=>handleAddUser(elm._id)}>Add</button>
                    :
                <button className="bid-price flex justify-end items-end" onClick={()=>handleRemoveUser(elm._id)}>Added</button>
                }
            </div>
            
            
        </div>
                </>
            )
        })
       }
    </section>
  )
}
