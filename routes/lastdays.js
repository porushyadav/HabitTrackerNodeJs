const express=require('express');

const router=express.Router();
const prevdays=require('../controllers/lastdays');

router.get('/',prevdays.lastdays);
router.get('/change',prevdays.updateDetails);




module.exports=router;