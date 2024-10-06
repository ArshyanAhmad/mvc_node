import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {getMyProfile, getAllUsers, register, login } from "../controllers/controllers.js"

const router = express.Router();

/* Both are same
   router.route("/userid/:id").get(getUserDetails);
*/
// router.get("/userid/:id", getUserDetails);

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

router.get("/me", isAuthenticated, getMyProfile);

export default router;