
import { BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaKey, FaLock } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail, MdPassword } from "react-icons/md";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

const Signin = () => {

  const [form , setform]=useState({
    userType:'',
    email:'',
    password:'',
    cpassword:'',
    
})

const { userType,
email,
password,
cpassword,}=form;

console.log( userType,
email,
password,
cpassword,)


const handlechange=(e)=>{
  setform({
      ...form,
      [e.target.name]:e.target.value
  })
}


const handlesubmit=async(event)=>{
  event.preventDefault()

try{
const res= await axios.post("http://localhost:3400/sign-in",{
  userType,
email,
  password,
  cpassword

})
if(res.status===201){
  const {token,data,message}= await res.data
  
  
  console.log(token)
  toast.success(message, {
    position: "top-center",
    autoClose: 1000, // 3000 milliseconds = 3 seconds
    onClose: () => {
      setTimeout(() => {
     window.location.href="/"
     
        
      }, 1000);
     
    setTimeout(() => {
     
      // window.location.reload()
      
    }, 2000);
      // Redirect after toast message
    },
   
  });

  document.cookie=`tokenvishu=${token} ; path=/`
 
}else{
  toast.error("invalid login", {
    position: "top-center",
    autoClose: 1000, // 3000 milliseconds = 3 seconds
  })
}
}catch(e){
  console.log(e)
  toast.error("invalid login", {
    position: "top-center",
    autoClose: 1000, // 3000 milliseconds = 3 seconds
  })
}

}

  return (
    <>
     <ToastContainer />
      <section className="  w-[100%]  h-lvh py-8 px-5 Signin-bg">
        
       
       <div className="">
       <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="flex flex-col justify-around space-y-12">

          <div className="flex items-center flex-col space-y-1 text-white pt-8">
            <h1 className="text-xl font-medium"> New here?</h1>
            <p className="text-center">
            Log in to your existing aacount

            </p>
            <Link to="/sign-up"><button className="  border-white border-2 rounded-full px-8 py-1">Sign Up</button></Link>
           
          </div>
          <div className="">
            <img src="login.png" alt="images" />
          </div>
        </div>

        {/* sign in page */}

        <form className="bg-sign" onSubmit={handlesubmit}>
          <div className="space-y-4 p-10 ">
          <h1 className="text-center font-extrabold text-3xl">Sign In</h1>
          <div class="w-64">
        
        <select id="userType" name="userType"
           onChange={handlechange}
        value={userType} className="block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-4 rounded-full">
        <option>Select userType</option>
            <option value="employee">Employee</option>
            <option value="labor">Labor</option>
            <option value="contractor">Contractor</option>
        </select>
    </div>
            <div className="flex items-center bg-white rounded-full p-3 border-2 hover:border-2 fa-icon">
              <MdEmail />
              <input
                type="email"
                name="email"
                  value={email}
                  onChange={handlechange}
                autoComplete="off"
                placeholder="user@gmail.com"
                className="w-[100%] px-3 focus-within:border-none"
              />
            </div>


            <div className="flex items-center bg-white rounded-full p-3 border-2 hover:border-2 fa-icon">
              <FaLock />
              <input
                type="password"
                name="password"
                  value={password}
                  onChange={handlechange}
                autoComplete="off"
                placeholder="password"
                className="w-[100%] px-3 focus-within:border-none"
              />
            </div>

           
           <div className="flex justify-between items-center mx-auto">
             <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto font-bold py-2 px-6 rounded-full">
             Sign In
            </button>
           </div>

            <p className="text-center text-lg"> or Sign in with Social platforms</p>

            <div className="flex gap-5 items-center justify-center">
              <Link href="#" className="border border-black fa-icon rounded-full p-3">
                <FaFacebookF className="" />
              </Link>

              <Link href="#" className="border border-black fa-icon rounded-full p-3">
               
                <FaTwitter className="" />
              </Link>

              <Link href="#" className="border border-black fa-icon rounded-full p-3">
               
                <FaGoogle className="" />
              </Link>

              <Link href="#" className="border border-black fa-icon rounded-full p-3">
               
                <FaLinkedin className="" />
              </Link>

         
             
            </div>
          </div>
        </form>
        </div>
       </div>
      </section>
    </>
  );
};

export default Signin;
