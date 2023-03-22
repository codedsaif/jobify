import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import authenticationUser from "../middleware/auth.js";

router.route("/").post(createJob).get(getAllJobs);

router.route("/stats").get(authenticationUser, showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
