import express from "express";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";

export const app = express();

// using middleware
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Working")
})

app.use("/api/v1/users", userRouter);


