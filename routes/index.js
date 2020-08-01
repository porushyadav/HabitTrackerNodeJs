const express=require('express');
const homeController=require('../controllers/home');

const app=express();
const router=express.Router();
console.log("loaded");

router.get('/',homeController.home);

//used to create the form
router.use('/create',require('./create'));


//used to delete the form
router.use('/delete',require('./delete'));

module.exports=router;