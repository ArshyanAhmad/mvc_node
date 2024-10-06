import express from "express";
import {getUserDetails, getAllUsers, register, login } from "../controllers/controllers.js"

const router = express.Router();

/* Both are same
   router.route("/userid/:id").get(getUserDetails);
*/
router.get("/userid/:id", getUserDetails);

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

export default router;