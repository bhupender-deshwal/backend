const Task = require('../models/Tasks')


const getAllTasks = async(req,res)=>{
    try{
        const task = await Task.find({});
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({msg:error.message})
    }
}
const getTask = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            res.status(404).json({"msg":"Task not found"});
            return
        }
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({msg:error.message})
    }
}
const createTasks = async(req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({msg:error.message})
    }
}
const deleteTasks = async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            res.status(404).json({"msg":"Task not found"});
            return
        }
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({msg:error.message})
    }
}
const updateTasks = async(req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body);
        if(!task){
            res.status(404).json({"msg":"Task not found"});
            return
        }
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({msg:error.message})
    }
}

module.exports={
    getAllTasks,
    getTask,
    createTasks,
    deleteTasks,
    updateTasks,
}