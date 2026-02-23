import { motion } from "framer-motion";

const Jobs = () => {
  const jobs = [
    { id: 1, title: "Senior React Developer", type: "Remote", salary: "$120k - $160k" },
    { id: 2, title: "Healthcare Administrator", type: "On-site", salary: "$90k - $110k" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Open Roles</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <motion.div 
            whileHover={{ x: 10 }}
            key={job.id} 
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-slate-400">{job.type} • {job.salary}</p>
            </div>
            <a 
              href="https://docs.google.com/forms/your-form" 
              className="text-cyan-400 font-bold hover:underline"
            >
              Apply Now →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;