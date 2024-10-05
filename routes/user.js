import express from "express";
import { createUser, deleteUser, findUser, getAllUsers, putUser, specialRoute } from "../controllers/controllers.js";

const router = express.Router();

router.get("/userid/special", specialRoute);

router.route("/userid/:id").get(findUser).put(putUser).delete(deleteUser);

// router.get("/userid/:id", findUser);

// router.put("/userid/:id", putUser);

// router.delete("/userid/:id", deleteUser);

router.get("/all", getAllUsers);

router.post("/new", createUser);

export default router;