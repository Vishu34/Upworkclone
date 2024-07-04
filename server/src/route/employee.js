
const express= require('express');
const { Empjobpost, Getemployee, Getemployee1 } = require('../controller/Employee');
const auth = require('../middleware/auth');
const Router= express.Router();

Router.route("/job-post").post(Empjobpost);
Router.route("/getemplyee/:id").get(Getemployee);
Router.route("/getemplyee").get(Getemployee1);

module.exports=Router;
