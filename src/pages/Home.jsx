import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="bg-[#020617] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-cyan-900/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[70%] h-[70%] bg-purple-900/10 blur-[120px] rounded-full" />
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">Now Hiring for 2026</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            THE ART OF <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-slate-500 bg-clip-text text-transparent">
              TALENT.
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed px-4">
            Zentora is a specialized scouting firm for the <span className="text-white font-bold">top 1%</span> in Tech, Healthcare, and Engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
            <Link to="/employers" className="w-full sm:w-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-black flex items-center justify-center gap-2 text-sm transition-transform active:scale-95">
                HIRE TALENT <span>→</span>
              </button>
            </Link>
            
            <Link to="/jobs" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl font-bold hover:bg-white/10 transition-all text-sm active:scale-95">
                VIEW POSITIONS
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. BENTO GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 min-h-[350px] rounded-[2.5rem] bg-slate-900/40 border border-white/5 p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Technical Excellence</h3>
                <p className="text-slate-400 max-w-sm text-sm md:text-base">Specialized sourcing for React, DevOps, and AI Architects.</p>
              </div>
              <Link to="/candidates" className="text-cyan-400 font-bold flex items-center gap-2 mt-8 md:mt-0">
                JOIN DATABASE <span>→</span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
          </motion.div>

          <div className="md:col-span-4 min-h-[300px] rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 to-slate-900/40 border border-white/5 p-8 flex flex-col justify-center text-center">
            <span className="text-6xl font-black text-white mb-2">98%</span>
            <span className="text-slate-400 uppercase tracking-widest text-xs font-bold">Retention Rate</span>
          </div>

          <div className="md:col-span-4 min-h-[300px] rounded-[2.5rem] bg-slate-900/40 border border-white/5 p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">🛡️</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-slate-500 text-xs mb-4">Quality over quantity. We don't just fill seats; we fuel growth.</p>
              <Link to="/about" className="text-white text-xs font-bold underline underline-offset-8">OUR STORY</Link>
            </div>
          </div>

          <div className="md:col-span-8 min-h-[350px] rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center border border-white/5 relative group overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/60 transition-colors" />
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase">Healthcare Precision</h3>
                <p className="text-slate-400 text-sm">Staffing for critical care and administration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-24 px-6 text-center border-t border-white/5">
        <h2 className="text-3xl md:text-6xl font-bold mb-10 tracking-tighter">READY TO EVOLVE?</h2>
        <Link to="/candidates" className="inline-block px-10 py-5 bg-cyan-500 text-black font-black rounded-2xl hover:bg-white transition-all uppercase tracking-tighter text-sm">
          Apply as Candidate
        </Link>
      </section>
    </div>
  );
};

export default Home;