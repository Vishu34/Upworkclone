const User = require("../model/userSchema");
const bcrypt=require('bcryptjs');
const { options } = require("../route/user");
const { populate } = require("../model/empSchema");
const { model } = require("mongoose");
const Newuser = async (req, res) => {
    const { userType, email, password, cpassword } = req.body;
  console.log(userType, email, password, cpassword)
    try {
      const user = await User.findOne({ email: email });
      
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password should be at least 8 characters or long" });
      } else if (!userType || !email || !password || !cpassword) {
        return res.status(400).json({
          message: " All field are required",
        });
      }
  
      if (password === cpassword) {
        const user = await new User({
         
              userType:userType,
              email,
              password,
              confirmpassword:cpassword,
            
         
        });
  
        const result = await user.save();
        // console.log(result
        //   )
  
        return res.status(201).json({
          data: result,
          message: "register  is successfully",
        });
      } else {
        return res.status(200).json({ message: "password are not matching " });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  
  const Userlogin = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      const token = await user.generateauthtoken();
  
      const match = await bcrypt.compare(password, user.password);
  
      if (match) {
        res.status(201).json({
          token: token,
          data: user,
          message: "login successfully",
        });

        // console.log(user)
        console.log("login successfully");
      } else {
        return res.status(403).json({
          message: "invalid login",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  const Getuser = async (req, res) => {
    const userid=req.rootuserId
    try {
  
  
  
      
      
     
        const result = await User.findById(userid)
        .populate({
          path: 'empJobs',
        populate:{
            path:"conbid",
            populate:{
                path:"user"
            },
        },
        


       
        })
    //  console.log(result)
  
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


  const Getuser1 = async (req, res) => {
    
    try {
  
  
  
      
      
     
        const result = await User.find({})
      
    //  console.log(result)
  
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

  
  module.exports={Newuser , Userlogin , Getuser , Getuser1 }