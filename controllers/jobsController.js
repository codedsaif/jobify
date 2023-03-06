const createJob = async (req, res) => {
  res.send("job created");
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
