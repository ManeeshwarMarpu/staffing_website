import { motion } from "framer-motion";

const Candidates = () => {
  return (
    <div className="max-w-4xl mx-auto py-32 px-6 text-center">
      <motion.h2 initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-6xl font-black text-white mb-6">Elevate Your Career</motion.h2>
      <p className="text-slate-400 mb-12 text-lg">Join our exclusive database and get matched with Fortune 500 opportunities.</p>
      
      <div className="p-1 gap-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl">
        <div className="bg-slate-950 p-12 rounded-[1.4rem]">
          <h3 className="text-2xl font-bold text-white mb-6">Submit Your Resume</h3>
          <a href="https://forms.gle/L6gWg9JF9d4Yy7kS9" target="_blank" className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-400 transition-colors inline-block">
            Upload to Google Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Candidates;