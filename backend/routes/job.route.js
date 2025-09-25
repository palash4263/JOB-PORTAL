import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(getAdminJobs);
router.route("/get/:_id").get(getJobById)

export default router;