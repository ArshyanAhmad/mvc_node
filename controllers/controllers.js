import { User } from "../models/user.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { sendToken } from "../utils/features.js";

const getAllUsers = async (req, res) => { }

const login = async (req, res, next) => {

    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid email or password"
    });

    const isMatch = await bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid email or password"
    });

    sendToken(user, res, `Welcome back ${user.name}`, 200);

};

const register = async (req, res) => {

    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return res.status(404).json({
        success: false,
        message: "User Already Exist"
    });

    const hashedPassword = await bcrypt.hashSync(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendToken(user, res, "Register Successfully", 201);
};

const getMyProfile = (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user
    })

};

export { getMyProfile, getAllUsers, register, login };