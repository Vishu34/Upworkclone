import React, { useState } from 'react'
import ReactTimeago from 'react-timeago'
import Numberformat from '../NumberFormat'
import axios from 'axios'
import { UseContextuser } from '../Contextuser'
import { ToastContainer, toast } from 'react-toastify'

export const Jobsemp = ({data}) => {

    const {UserId}=UseContextuser();
    
    console.log(data)

    const[Bid, BidNow]=useState(false)
  const[con_description, setdescription]=useState("")

    const Bidclick=(id)=>{
        BidNow(id);
    }

    const handlechange=(e)=>{
        console.log(e.target.value);
setdescription(e.target.value)
    }


    const handlepost = async (emp_id) => {
        try {
          const response = await axios.post('http://localhost:3400/Conbidjob', {
con_description,
emp_id,
contractor_id:UserId

          });
      
         
          if (response.status === 201) {
            console.log('Job description submitted successfully!');
            toast.success('bid successfuly', {
                position: "top-center",
                autoClose: 1000, // 3000 milliseconds = 3 seconds
                onClose: () => {
                setTimeout(() => {
                 window.location.href="/contractor";
                }, 1000);
                  // Redirect after toast message
                }
          })
          } else {
            
            console.error('Failed to submit job description:', response.statusText);
            throw new Error(response.statusText);
          }
        } catch (error) {
         
          console.error('Error submitting job description:', error.message);
        
        }
      };


      
  return (

    <> <ToastContainer />
        <section>
        <div className="tt flex gap-5">
          {/* filters
           */}

         
         <div className="w-[20%]">
         <h1 className="headnig-fac">Filters</h1>
         <div className="filters">
         
            <div className="">
              <h1 className="head">Budgets</h1>
              <ul className="space-y-2">
                <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Fixed Prices Project
                  </div>
                  <ul className="flex justify-center gap-10 py-2">
                    <li className="min-max">Min</li>
                    <li className="min-max">Max</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Hourly Project
                  </div>
                  <ul className="flex justify-center gap-10 py-2">
                    <li className="min-max">Min</li>
                    <li className="min-max">Max</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="">
              <h1 className="head"> Types</h1>
              <ul>
                <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Local Jobs
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Full time Jobs
                  </div>
                </li>
                <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Featured Jobs
                  </div>
                </li>
                <li>
                  <div className="flex gap-10 items-center">
                    <input type="checkbox" />
                    Recruiter jobs
                  </div>
                </li>
              </ul>
            </div>
          </div>
         </div>

          {/* available searches */}

         
          <div className="w-[80%] space-y-4"> 
         <h1 className="headnig-fac">Available Jobs</h1>
         {
           
                data?.map(elm=>{
                    console.log(elm);
               return(
               
                <> 
               
               <div className="available space-y-2">
                 <div className="flex items-center justify-between">
                   
                   <div className=" flex gap-5"><h1 className="head">{elm.firstName}{elm.lastName}</h1>
                   <p><ReactTimeago date={elm.createdAt} /></p></div>
                   <p className="bid-price">
                    {<Numberformat number={elm.budget}/>}
                   </p>
                 </div>
     
                 <div className="">
                     <p>{elm.jobDescription}</p>
                 </div>
     
              
              {
                Bid===elm._id ? (
                    <>
                    <div className="">
                    <div className="space-y-4">
                    <h1>Description</h1>
                        <textarea onChange={handlechange} name="description" value={con_description} placeholder='type here' className='w-[100%] p-2 rounded-lg'>write here</textarea>
                    </div>

                    <button className='bid-price px-5' onClick={()=>handlepost(elm._id)}>Post</button>
                </div>
                    </>
                ) :null
              }

                 <div className="flex justify-end  items-end flex-col space-y-2">
                     <p>{elm.conbid?.length} bids</p>
                     <button className="bid-price" onClick={()=>Bidclick(elm._id)}>Bid Now</button>
                 </div>
     
                
               </div>
           
     
                     </>
               
               )
                })
               }
 
               
         
       
</div>
</div>.
       {/*complate jobs  */}
       <div className="">
       <h1 className="headnig-fac">Completed Jobs</h1>  
       <div className="completed-jobs space-y-2">
            <div className="flex items-center justify-between">
              
              <div className=" flex  gap-20"><h1 className="head">Name John</h1>
              <p>completed 1 month ago</p></div>
              
            </div>

           

            <div className="flex items-start justify-between space-y-2 gap-10">
            <div className="w-[40%]">
                <p>I am looking to give my kitchen a complete makeover  with a modern  touch. 
I want new cabinets, countertops an appliances.
The main goal is to create a space which is well organized.</p>
            </div>
                <div className="contract-worth">
                <span className="text-white text-lg font-medium">Contract Worth</span> 6000</div>
            </div>

            <div className=""></div>
          </div>
          </div>
        </section>
    </>
  )
}
