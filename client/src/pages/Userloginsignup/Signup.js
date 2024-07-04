import axios from "axios";
import React, { useState } from "react";

import { FaFacebookF, FaGoogle, FaLinkedin, FaTwitter, FaUser } from "react-icons/fa";
import { FaFacebook, FaKey, FaLock } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail, MdPassword } from "react-icons/md";

import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {



    const [form , setform]=useState({
        userType:'',
        email:'',
        password:'',
        cpassword:'',
        
    })

    const {userType , email, password, cpassword}=form;

    console.log(userType, email, password, cpassword)
    const handlechange=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    const handlesubmit=async(event)=>{
      event.preventDefault()
  
      try{
         
          const response=await fetch("http://localhost:3400/sign-up",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({
                
                  userType,
                  email,
                  password,
                  cpassword
                
             
              })
          });
  
          if(response.status===201){
              const data= await response.json()
              console.log(data)
              toast.success('Registration successful!', {
                position: "top-center",
                autoClose: 1000, // 3000 milliseconds = 3 seconds
                onClose: () => {
                setTimeout(() => {
                 window.location.href="/sign-in";
                }, 1000);
                  // Redirect after toast message
                },
              });
          }else {
            
           const {message}=await response.json()
           console.log(message)
            toast.error(message, {
              position: "top-center",
              autoClose: 1000, // 3000 milliseconds = 3 seconds
              
            });
          }
      }catch(e){
          console.error(e)
      }
  
  }
  return (
    <>
      <ToastContainer />
      <section className="  w-[100%]  h-lvh py-8 px-5 Sign-up-bg">
        <div className="">
          <div className="flex justify-between items-center w-[80%] mx-auto">
            {/* sign in page */}

            <div className="bg-sign">

              <div className="space-y-4 p-10 ">
                <h1 className="text-center font-extrabold text-3xl">
                <Link to="/sign-up">Sign Up</Link></h1>

                
                <form onSubmit={handlesubmit} className="space-y-4">
                <div className="flex items-center bg-white rounded-full p-3 border-2 hover:border-2 fa-icon">
                  <FaUser />
                 
        
        <select id="userType" name="userType"
           onChange={handlechange}
        value={userType} className="block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 rounded-full">
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

                <div className="flex items-center bg-white rounded-full p-3 border-2 hover:border-2 fa-icon">
                  <FaLock />
                  <input
                    type="password"
                    name="cpassword"
                      value={cpassword}
                      onChange={handlechange}
                    autoComplete="off"
                    placeholder="confirm password"
                    className="w-[100%] px-3 focus-within:border-none"
                  />
                  

                </div>

                <div className="flex justify-between items-center mx-auto">
                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto font-bold py-2 px-6 rounded-full">
                    Sign Up
                  </button>
                </div>
                </form>

                <p className="text-center text-lg">
                  {" "}
                  or Sign in with Social platforms
                </p>

                <div className="flex gap-5 items-center justify-center">
                  <Link
                    href="#"
                    className="border border-black fa-icon rounded-full p-3"
                  >
                    <FaFacebookF className="" />
                  </Link>

                  <Link
                    href="#"
                    className="border border-black fa-icon rounded-full p-3"
                  >
                    <FaTwitter className="" />
                  </Link>

                  <Link
                    href="#"
                    className="border border-black fa-icon rounded-full p-3"
                  >
                    <FaGoogle className="" />
                  </Link>

                  <Link
                    href="#"
                    className="border border-black fa-icon rounded-full p-3"
                  >
                    <FaLinkedin className="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-around space-y-12">
              <div className="flex items-center flex-col space-y-1 text-white pt-8">
                <h1 className="text-xl font-medium"> One Of Us ?</h1>
                <p className="text-center">
                Join our already vast network by creating your account
                </p>

                <Link to="/sign-in">
                  <button className="  border-white border-2 rounded-full px-8 py-1">
                    Sign In
                  </button>
                </Link>
              </div>
              <div className="">
                <img src="login.png" alt="images" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
