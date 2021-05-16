const express = require('express');
const router = express.Router();
const { user_Model } = require('../modals/userschema'); 

router.get('/',(req,res)=>{
    user_Model.find()
    .then(data => {
        res.status(200).json({ x: data })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })
})


router.get('/:id', (req, res) => {
    var id = req.params.id;

    user_Model.findById(id)
        .then(data => {
            res.status(200).json({ x: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
})


router.post('/',(req,res)=>{
    console.log(req.body);
    var userData = new user_Model({
        Name: req.body.name,
        Age: req.body.age,
        City: req.body.city
    })
    console.log(userData);
    userData.save()
    .then(result=>{
        res.status(200).json({x:"data added"})
    })
    .catch(err=>{
        res.json({err:"error"})
    })
})

router.put('/:id',(req,res)=>{
    var id = req.params.id;

    var userData = {
        Name: req.body.name,
        City: req.body.city,
        Age: req.body.age
    }

    user_Model.findByIdAndUpdate(id,{ $set: userData })
    .then(result=>{
        res.status(200).json({status:"Successfully Updated"})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})


router.delete('/:id',(req,res)=>{
    var id = req.params.id;

    user_Model.findByIdAndDelete(id)
    .then(result=>{
        res.status(200).json({status:"Successfully Deleted"})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

module.exports=router;