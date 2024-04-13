import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getApplications, getUser, getUserDetails, resumeupload, updateUser } from "../controllers/userController.js";
import upload from "../middlewares/resumeParser.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

router.get("/applied-jobs",userAuth,getApplications)

//Seeker Details

router.get("/get-user-details/:id",getUserDetails)

router.get("/uploadresume",resumeupload)

export default router;