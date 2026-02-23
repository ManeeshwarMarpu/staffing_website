import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Jobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hr.zentora@gmail.com";
  
  const jobList = [
    { id: 1, title: "Senior React Developer", loc: "Remote", pay: "$140k - $180k", sector: "IT" },
    { id: 2, title: "Healthcare Administrator", loc: "Houston, TX", pay: "$95k - $120k", sector: "Medical" },
    { id: 3, title: "Cloud Architect", loc: "Hybrid", pay: "$160k - $210k", sector: "IT" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">
          Open <span className="text-cyan-400">Positions</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">Discover elite opportunities in Tech and Healthcare.</p>
      </motion.div>

      <div className="space-y-4">
        {jobList.map((job) => (
          <motion.div 
            key={job.id} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 md:p-8 bg-slate-900/40 border border-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-center hover:border-cyan-500/50 transition-all group backdrop-blur-sm"
          >
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">{job.sector}</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-cyan-100 transition-colors">{job.title}</h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">{job.loc} • {job.pay}</p>
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="w-full md:w-auto relative px-8 py-4 bg-white text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/20 uppercase text-xs tracking-wider"
            >
              Talk to Founder
            </button>
          </motion.div>
        ))}
      </div>

      {/* --- REUSABLE CONTACT MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Apply for Position</h3>
              <p className="text-slate-400 mb-8 text-sm">Please reach out to our founding team directly.</p>

              <div className="space-y-4">
                <button 
                  onClick={handleCopy}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all group flex flex-col items-center"
                >
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Copy HR Email</span>
                  <span className="text-lg text-cyan-400 font-mono tracking-tight">{copied ? "COPIED!" : email}</span>
                </button>

                <div className="py-2 text-slate-700 text-[10px] font-black tracking-widest">OR</div>

                <a 
                  href={`mailto:${email}?subject=Job Application`}
                  className="block w-full p-5 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-white transition-colors uppercase text-xs tracking-widest"
                >
                  Open Mail App
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobs;