import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Connecting Talent With Opportunity
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          IT • Healthcare • Engineering • Executive Hiring
        </p>
        <button className="px-6 py-3 bg-cyan-400 text-black rounded-full hover:scale-110 transition">
          Explore Jobs
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
