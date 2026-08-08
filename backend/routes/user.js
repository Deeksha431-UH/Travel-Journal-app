import express from "express";
import { getUser, signout } from "../Controllers/user.js";
import { verifyUser } from "../Lib/verifyUser.js";
const router = express.Router();


router.get("/get-user", verifyUser, getUser);
router.post("/logout", signout);



export default router;