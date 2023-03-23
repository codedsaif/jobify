import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please Provide All Values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const deleteJob = async (req, res) => {
  res.send("job deleted");
};
const getAllJobs = async (req, res) => {
  res.send("All jobs gated");
};
const updateJob = async (req, res) => {
  res.send("job updated");
};
const showStats = async (req, res) => {
  res.send("showed stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
