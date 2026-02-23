import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax elements for depth
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div ref={containerRef} className="bg-[#020617] text-white selection:bg-cyan-500/30">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden px-6">
        {/* Advanced Mesh Background */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-cyan-900/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">Now Hiring for 2026</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-tight mb-6">
            THE ART OF <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-slate-500 bg-clip-text text-transparent">
              TALENT.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Zentora isn't just a staffing agency. We are a specialized scouting firm for the <span className="text-white">top 1%</span> in Tech & Engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/employers" className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative bg-white text-black px-10 py-4 rounded-full font-black flex items-center gap-2">
                HIRE TALENT <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <Link to="/jobs">
              <button className="px-10 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl font-bold hover:bg-white/10 transition-all">
                VIEW POSITIONS
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. THE BENTO GRID (The "Useful" Part) */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large Card: Tech */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 h-[400px] rounded-[2rem] bg-slate-900/40 border border-white/5 p-10 relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold mb-2">Technical Excellence</h3>
                <p className="text-slate-400 max-w-sm">From Silicon Valley startups to Global Enterprises.</p>
              </div>
              <Link to="/candidates" className="text-cyan-400 font-bold flex items-center gap-2">
                JOIN DATABASE <span className="group-hover:pl-2 transition-all">→</span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Small Card: Stats */}
          <div className="md:col-span-4 h-[400px] rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-slate-900/40 border border-white/5 p-10 flex flex-col justify-center text-center">
            <span className="text-6xl font-black text-white mb-2">98%</span>
            <span className="text-slate-400 uppercase tracking-widest text-sm">Retention Rate</span>
          </div>

          {/* Small Card: About */}
          <div className="md:col-span-4 h-[400px] rounded-[2rem] bg-slate-900/40 border border-white/5 p-10 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">🛡️</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-slate-500 text-sm mb-4">Precision over volume. We don't spam resumes.</p>
              <Link to="/about" className="text-white text-sm font-bold underline underline-offset-4">READ STORY</Link>
            </div>
          </div>

          {/* Large Card: Healthcare */}
          <div className="md:col-span-8 h-[400px] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center border border-white/5 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/60 transition-colors" />
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white">Healthcare Precision</h3>
                <p className="text-slate-300">Staffing for critical care and administration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Ready to evolve?</h2>
        <div className="flex gap-4 justify-center">
             <Link to="/candidates" className="px-12 py-6 bg-cyan-500 text-black font-black rounded-2xl hover:bg-white transition-colors uppercase tracking-tighter">
                Apply as Candidate
             </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;