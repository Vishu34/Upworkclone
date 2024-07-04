const mongoose = require('mongoose');


const jobDescriptionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"userler" ,//reference to empjob
    
  }
 
},
{
    timestamps: true,
  }

);


const Conjobdescription = mongoose.model('JobDescription', jobDescriptionSchema);

module.exports = Conjobdescription;
