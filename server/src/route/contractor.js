
const express= require('express');
const { ContractBid, Addlabor, Removelabor, GetParticularlabor } = require('../controller/Contractor');

const Router= express.Router();

Router.route("/Conbidjob").post(ContractBid);
Router.route("/Addlabor").put(Addlabor);
Router.route("/Removelab").put(Removelabor);
Router.route("/getlab/:id").get(GetParticularlabor);


module.exports=Router;
