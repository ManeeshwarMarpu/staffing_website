import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // <-- Add this to fix the error

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
         ZEN <span className="text-cyan-400">TORA</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/jobs" className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors">Jobs</Link>
          <Link to="/employers" className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors">Employers</Link>
                    <Link to="/about" className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors">About us</Link>
          <Link to="/candidates" className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors">Join</Link>
          {/* <a href="https://forms.google.com" target="_blank" className="bg-cyan-500 text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-white transition-all">
            Get Started
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;