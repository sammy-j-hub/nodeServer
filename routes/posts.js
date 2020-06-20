const express = require('express');

const router = express.Router();
const Post = require('../models/Post')

//Get all data from DB 
router.get('/', async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res,json({message: error});
    }
});

//Insert Data
router.post('/', async (req, res) =>{
    const post1 = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post1.save();
        res.json(savedPost);
    } catch(err){
        res.json({message: error});
    }
    
});
//Specific post 
router.get('/:postId', async(req,res) =>{
    try{
        const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: error});
    }  
});

//Update Data 
router.patch('/:postId', async(req,res) =>{
    try{
        const updatedData = await Post.updateOne( {_id: req.params.postId},{$set : {title : req.body.title} } );
    res.json(updatedData);
    }catch(err){
        res.json({message: error});
    }  
});


//Delete Data
router.delete('/:postId', async(req,res) =>{
    try{
        const removeData = await Post.remove({_id: req.params.postId});
    res.json(removeData);
    }catch(err){
        res.json({message: error});
    }  
});


module.exports = router;