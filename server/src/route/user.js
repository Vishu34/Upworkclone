
const express=require('express');
const { Newuser, Userlogin, Getuser, Getuser1 } = require('../controller/Newuser');
const auth = require('../middleware/auth');
const Router=express.Router();

Router.route("/sign-up").post(Newuser);
Router.route("/sign-in").post(Userlogin)
Router.route("/getuser").get(auth, Getuser)
Router.route("/getuser1").get(Getuser1)

module.exports=Router;