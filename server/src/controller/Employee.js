const Employee= require("../model/empSchema");

const mongoose=require('mongoose');
const User = require("../model/userSchema");
const Empjobpost=async(req,res)=>{




    try {
      
        const {
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
        } = req.body;

        console.log(
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
            jobDescription)

        // Create a new employee object
        const newEmployee = new Employee({
            empid:emp_id,
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
        });

        const result=await newEmployee.save();
        console.log(result._id);

        const Employeejobs= await User.findByIdAndUpdate(
            { _id:emp_id },
            { $push: {  empJobs: result._id}},
            { new: true }
          );


        // Save the new employee to the database
        await newEmployee.save();

        console.log( await newEmployee.save())
        // Return success response
        res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
    } catch (error) {
        // Return error response if there's an issue
        res.status(500).json({ message: 'Failed to create employee', error: error.message });
    }
}


const Getemployee = async (req, res) => {
    const userid=req.params.id;
    console.log(userid)


    try {
  
  
  
      
      
     
      const result = await User.findById({
     _id:userid   })
        .populate({
            path:"empJobs",
            options:{
              sort:{createdAt:1}
            }
           })
     


     
     console.log("the result is " + result)
  
     res.status(201).json({
      message: " user data have got successfully",
      data: result,
    });



    
    
    
  
   
  
    
     
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Internal server error",
      });
      
    }
  };



  const Getemployee1 = async (req, res) => {
    const userid=req.params.id;
    console.log(userid)


    try {
  
  
  
      
      
     
      const result = await Employee.find({})
     
     console.log(result)
  
     res.status(201).json({
      message: " user data have got successfully",
      data: result,
    });
    
    
    
  
   
  
    
     
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Internal server error",
      });
      
    }
  };

module.exports={Empjobpost , Getemployee , Getemployee1}



