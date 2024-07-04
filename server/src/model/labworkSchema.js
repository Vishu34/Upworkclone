const mongoose = require('mongoose');


const LabworkSchema = new mongoose.Schema({
  con_id:{
    type:String,
    required:true
  },
  lab_id:{
    type:String,
    required:true
  },
//   labname:{
//     type:String,
//     required:true
//   },
  labemail:{
    type:String,
    required:true
  },
},
{
    timestamps: true,
  }

);


const LabSchema = mongoose.model('workerlist', LabworkSchema);

module.exports = LabSchema;
