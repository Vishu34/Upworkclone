import axios from "axios";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export const Jobform = ({ showjob,emp_id }) => {
  const [form, setform] = useState({
    firstName: "",

    lastName: "",

    email: "",

    phoneNumber: "",

    age: "",

    gender: "",

    jobType: "",

    experienceLevel: "",

    address: "",

    availability: "",

    budget: "",

    contactNo: "",

    startDate: "",

    endDate: "",

    physicalRequirement: "",

    specialization: "",

    jobDescription: "",
  });

  const {
    firstName,
            lastName,
            email,
            phoneNumber,
            age,
            gender,
            jobType,
            experienceLevel,
            address,
            availability,
            budget,
            contactNo,
            startDate,
            endDate,
            physicalRequirement,
            specialization,
            jobDescription
  } = form;

  
  const handlechange=(e)=>{
    setform({...form , [e.target.name]:e.target.value})
  }

  console.log( firstName,
    lastName,
    email,
    phoneNumber,
    age,
    gender,
    jobType,
    experienceLevel,
    address,
    availability,
    budget,
    contactNo,
    startDate,
    endDate,
    physicalRequirement,
    specialization,
    jobDescription  )

const handlesubmit=async(event)=>{
event.preventDefault();

 try{

    const res = await axios.post("http://localhost:3400/job-post",
        {
            emp_id,
            firstName,
            lastName,
            email,
            phoneNumber,
            age,
            gender,
            jobType,
            experienceLevel,
            address,
            availability,
            budget,
            contactNo,
            startDate,
            endDate,
            physicalRequirement,
            specialization,
            jobDescription   
        })

        if(res.status===201){
            const data= await res.data;
            console.log(data)
            toast.success('Job Posted  successfullY', {
              position: "top-center",
              autoClose: 1000, // 3000 milliseconds = 3 seconds
              onClose: () => {
              setTimeout(() => {
               window.location.href="/employee";
              }, 1000);
                // Redirect after toast message
              },
            });
        }else {
          
         const {message}=await res.data;
         console.log(message)
          toast.error(message, {
            position: "top-center",
            autoClose: 1000, // 3000 milliseconds = 3 seconds
            
          });
        }
        
 }catch(error){
console.log(error)
 }
}


  return (
    <>
      <ToastContainer />
      <section className="CEL-width   absolute top-20 left-0 w-[85%] pb-10 mb-10">
        <form className=" p-8 bg-white rounded-lg shadow-lg space-y-4 relative"
        onSubmit={handlesubmit}>
          <p
            className="absolute right-5 top-5 cursor-pointer"
            onClick={() => showjob(false)}
          >
            <FaTimes />
          </p>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Job Application Form</h2>
            <p>Please fill out the form Below to Submit Your Job Application</p>
          </div>
          <div className=" form grid grid-cols-2 gap-4" >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={firstName}
                type="text"
                id="firstName"
                required
                name="firstName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
               onChange={handlechange}
               value={lastName}
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={email}
                type="email"
                id="email"
                required
                name="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={phoneNumber}
                type="tel"
                id="phoneNumber"
                required
                name="phoneNumber"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={age}
                type="number"
                id="age"
                required
                name="age"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>

            <div>
      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
        Gender
      </label>
      <select
        id="gender"
        name="gender"
        value={gender}
        onChange={handlechange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
           
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-4">
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700"
              >
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                id="jobType"
                onChange={handlechange}
                value={jobType}
                required
                name="jobType"
                className="mt-1 block w-full py-2 px-3 border border-gray-500 p-2 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option value="">Select Job</option>
                <option value="partTime">Part Time</option>
                <option value="fullTime">Full Time</option>
                <option value="recruiter">Recruiter Job</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="experienceLevel"
                className="block text-sm font-medium text-gray-700"
              >
                Experience Level <span className="text-red-500">*</span>
              </label>
              <select
                id="experienceLevel"
                required
                onChange={handlechange}
                value={experienceLevel}
                name="experienceLevel"
                className="mt-1 block w-full py-2 px-3 border border-gray-500 p-2 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={address}
                type="text"
                required
                id="address"
                name="address"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Emergency Contact information{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={contactNo}
                type="tel"
                required
                id="address"
                name="contactNo"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={budget}
                type="number"
                required
                id="budget"
                name="budget"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-700"
              >
                Availability <span className="text-red-500">*</span>
              </label>
              <input
               onChange={handlechange}
               value={availability}
                type="text"
                id="availability"
                name="availability"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
               onChange={handlechange}
               value={startDate}
                type="date"
                id="startDate"
                name="startDate"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
               onChange={handlechange}
               value={endDate}
                type="date"
                id="endDate"
                name="endDate"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="physicalRequirement"
              className="block text-sm font-medium text-gray-700"
            >
              Physical Requirement <span className="text-red-500">*</span>
            </label>
            <input
             onChange={handlechange}
             value={physicalRequirement}
              type="text"
              required
              id="physicalRequirement"
              name="physicalRequirement"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="specialization"
              className="block text-sm font-medium text-gray-700"
            >
              Specialization Skills <span className="text-red-500">*</span>
            </label>
            <input
             onChange={handlechange}
             value={specialization}
              type="text"
              required
              id="specialization"
              name="specialization"
              
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="jobDescription"

              onChange={handlechange}
              value={jobDescription}
              required
              name="jobDescription"
              rows="4"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 border p-2 rounded-md"
            ></textarea>
          </div>

          <div className="">
            <button type="submit" className="bg-gray-500 text-white px-8 py-2 rounded-xl">
              
              Submit
            </button>
          </div>

        </form>
      </section>
    </>
  );
};
