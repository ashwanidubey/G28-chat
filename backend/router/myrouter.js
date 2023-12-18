const express=require('express');
const {load}=require('../function/load')
const router=express.Router();
router.get('/',load)

module.exports={router}

