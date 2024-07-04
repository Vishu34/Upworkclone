import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


import TimeAgo from 'react-timeago'
import { UseContextuser } from "./Contextuser";








export const Navbar = () => {

    const {UserId,setuserId}=UseContextuser();

    console.log(UserId)
  const [userType, setuserType] = useState("");
  console.log(userType);

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
setuserId(data._id)
          setuserType(data.userType);
        } else {
          console.log("data nahi aaya hai");
        //   window.location.href="/sign-in"
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchdata();
  }, [UserId , setuserId]);






  const [userlogin, setlogin] = useState("");

  useEffect(() => {
    let token1 = document.cookie
      .split("; ")
      .find((row) => row.startsWith("tokenvishu="))
      ?.split("=")[1];

    setlogin(token1);
  }, [userlogin]);

  const handlelogout = () => {
    toast.success("successfully logout", {
      position: "top-center",
      autoClose: 1000, // 3000 milliseconds = 3 seconds
      onClose: () => {
        setTimeout(() => {
          window.location.reload();
          window.location.href="/"
        }, 1000); // Refresh after 1 second
      },
      
    }

    
);



document.cookie = `tokenvishu=; expires=1000; path=/`;
localStorage.removeItem("userinfo");
  };



  return (
    <>
      <ToastContainer />
      
     
      <header className="flex justify-between CEL-width my-5 py-5 items-center">
        <h1 className="head">
        <Link to="/">LaborLink</Link>
        </h1>
        <nav>
          <ul className="flex gap-44 items-center">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>


            {/* /labor' element={<Labr/>}/>
      <Route path='/contractor' element={<Cont/>}/>
      <Route path='/employee */}
          {
            userlogin ?   
                userType==="employee" ? <li>
              <Link to="/employee">Employee</Link>
            </li> : userType ==="contractor" ? <li>
              <Link to="/contractor">Contractor</Link>
            </li> :userType ==="labor" ? <li>
              <Link to="/Labor">Labor</Link>
            </li>
             :  <li>
              <Link to="/jobs">Jobs</Link>
            </li> :  <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          }
           
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {userlogin ? (
              <li onClick={handlelogout} className="login-btn">
                Logout
              </li>
            ) : (
              <li>
                <Link to="/sign-up" className="login-btn" href="#">
                  Login/Sign Up
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
