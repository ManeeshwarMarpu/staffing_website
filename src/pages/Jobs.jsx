import { motion } from "framer-motion";

const Jobs = () => {
  // Use the email link from your About.jsx for the "Talk to Founder" action
  const founderEmail = "mailto:hr.zentora@gmail.com?subject=Inquiry%20for%20ZENTORA%20Founder&body=Hello,%20I%20would%20like%20to%20discuss...";
  
  const jobList = [
    { id: 1, title: "Senior React Developer", loc: "Remote", pay: "$140k - $180k", sector: "IT" },
    { id: 2, title: "Healthcare Administrator", loc: "Houston, TX", pay: "$95k - $120k", sector: "Medical" },
    { id: 3, title: "Cloud Architect", loc: "Hybrid", pay: "$160k - $210k", sector: "IT" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          Open <span className="text-cyan-400">Positions</span>
        </h2>
        <p className="text-slate-400 text-lg">Discover elite opportunities in Tech and Healthcare.</p>
      </motion.div>

      <div className="space-y-4">
        {jobList.map((job) => (
          <motion.div 
            key={job.id} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-center hover:border-cyan-500/50 transition-all group backdrop-blur-sm"
          >
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">{job.sector}</span>
              <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-100 transition-colors">{job.title}</h3>
              <p className="text-slate-500 font-medium">{job.loc} • {job.pay}</p>
            </div>
            
            <a 
              href={founderEmail} 
              className="relative px-8 py-3 bg-white text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/20 uppercase text-sm tracking-wider"
            >
              Talk to Founder
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;