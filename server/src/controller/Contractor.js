const Conjobdescription = require("../model/conjobSchema");
const Employee = require("../model/empSchema");
const LabSchema = require("../model/labworkSchema");
const User = require("../model/userSchema");

const ContractBid = async (req, res) => {
    const { con_description,
        emp_id,
        contractor_id } = req.body;

  console.log(con_description,
    emp_id,
    contractor_id);


    try {
      
  


      
        const Conjob = await new Conjobdescription({
         
             
            description:con_description
         
        });
  
        const result = await Conjob.save();
        
  console.log("employee" + result)
        const empjob=await Employee.findByIdAndUpdate({_id:emp_id},
            { $push: { conbid: result._id}},
            { new: true }
          );
        
          const user1=await Conjobdescription.findByIdAndUpdate({_id:result._id},
            { $push: { user:contractor_id}},
            { new: true }
          );
        return res.status(201).json({
          data: result,
          message: "register  is successfully",
        });
     
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };



  const Addlabor = async (req, res) => {
    const {  UserId,
        lab_id, } = req.body;

  console.log( UserId,
    lab_id,);


    try {
      
  
const user1=await User.findById({
_id:lab_id},
);

const user2=await User.findById({
    _id:UserId},
    );


const user12=await new LabSchema(
  {
    con_id:UserId,
    lab_id:user1._id,
    labemail:user1.email,


  }
)


const isLaborInWorkingData = user1.working.some(data=>data._id===lab_id);
if (isLaborInWorkingData) {
    return res.status(400).json({ message: 'This labor is already added by another user.' });
  }


  user2.workingData.push(user1);
  await user2.save();
  res.status(201).json({ message: 'Labor added successfully.' });


      
       
  
      
     
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
 

  const Removelabor = async (req, res) => {
    const {  UserId,
        lab_id, } = req.body;

  console.log( UserId,
    lab_id,);


    try {
      
  
        const user = await User.findById({_id:UserId});

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
          }

          user.workingData = user.workingData.filter(data => data._id !== lab_id);
          await user.save();




      
       
  
          res.status(201).json({ message: 'Labor removed successfully.' });
     
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
 


  const GetParticularlabor = async (req, res) => {
   const id =req.params.id;

console.log(id)
    try {
      
  const result=await LabSchema.find({con_id:id});
  console.log(result)




      
       
  
        res.status(201).json({
          data: result,
          message: "register  is successfully",
        });
     
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
 




  module.exports={ContractBid , Addlabor , Removelabor , GetParticularlabor}