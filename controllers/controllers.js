import { User } from "../models/user.js";

const getAllUsers = async (req, res) => {
    const users = await User.find({})

    res.json({
        success: true,
        users
    });

}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Sign Up Successfully"
    });

};


const findUser =  async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user
    })

}

const deleteUser =  async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Deleted"
    })

}

const putUser =  async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "updated"
    })

}


const specialRoute = (req, res) => {

    res.json({
        success: true,
    })

}

export {getAllUsers, createUser, findUser, specialRoute, deleteUser, putUser};