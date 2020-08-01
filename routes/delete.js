const express=require('express');
const router=express.Router();
const deleteController=require('../controllers/delete');
console.log("delete route")
router.get('/',deleteController.delete);
router.get('/multiple-delete',deleteController.multipleDelete);

module.exports=router;