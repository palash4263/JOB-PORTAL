import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Define routes and associate them with controller functions
// Route for user registration
//How they work
//1. Define a route using router.METHOD(PATH, HANDLER)
//2. When a request is made to the specified PATH with the specified METHOD, the HANDLER function is invoked
//3. The HANDLER function processes the request and sends back a response

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateProfile)
router.route("/logout").get(logout);

export default router;