import express from "express";
import userRouter from "./routes/user.js"

export const app = express();

// using middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working")
})

app.use("/users", userRouter);


