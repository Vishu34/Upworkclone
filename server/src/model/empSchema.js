const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empid:{ 
        type: String, 
        required: true 
    },
    
  firstName: { 
    type: String, 
    required: true 
},


  lastName: { 
    type: String, 
    required: true 
},


  email: { type: String, 
    required: true 
},


  phoneNumber: { type: String, 
    required: true 
},

  age: { type: Number, 
    required: true 
},

  gender: { type: String, enum: ["male", "female"], 
  required: true 
},

  jobType: { type: String, 
    required: true 
},

  experienceLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    
    required: true,
  
},

  address: { type: String, 
    required: true 
},

  availability: { type: String, 
    required: true 
},

  budget: { type: Number, 
    required: true 
},

  contactNo: { type: String, 
    required: true 
},

  startDate: { type: Date, 
   
},

  endDate: { type: Date, 
   
},

  physicalRequirement: { type: String, 
    required: true 
},

  specialization: { type: String, 
    required: true 
},

  jobDescription: { type: String, 
    required: true 
},


conbid:{
  
        type:[mongoose.Schema.Types.ObjectId],
        ref:"JobDescription" ,//reference to empjob
        default:[]
  
}

},
{
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
