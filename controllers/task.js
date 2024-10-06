import { Task } from "../models/task.js";

const newTask = async (req, res, next) => {

    const { title, description } = req.body;

    // const task = new Task({});
    // await task.save()
    await Task.create({
        title,
        description,
        user: req.user
    })

    res.status(201).json({
        success: true,
        message: "Task added Successfully"
    });

    next();

}

const getMyTasks = async (req, res, next) => {

    const userId = req.user._id;

    // find method gives an array 
    const tasks = await Task.find({ user: userId });

    res.status(200).json({
        success: true,
        tasks
    })

}


// put and delete 

const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
        success: true,
        message: "Task Updated"
    })
}

const deleteTask = async(req, res) => {
    const task = await Task.findById(req.params.id);
    await task.deleteOne();

    res.status(200).json({
        success: true,
        message: "Task Deleted"
    })
}

export { newTask, getMyTasks, updateTask, deleteTask };