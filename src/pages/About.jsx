import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hr.zentora@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-32 px-6 overflow-hidden bg-[#020617]">
      {/* Vision Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-black text-white leading-tight mb-8 uppercase tracking-tighter">
            THE <span className="text-cyan-400">ZENTORA</span> ADVANTAGE.
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-6">
            ZENTORA was founded on a simple principle: Quality over Quantity. In a world of automated noise, we believe in the power of human precision.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Our mission is to empower the world's most innovative companies by connecting them with the top 1% of specialized talent across the globe.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative aspect-video bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center"
          >
             <div className="text-8xl drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">⚡</div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        {[
          { label: "Elite Placements", val: "500+" },
          { label: "Client Retention", val: "98%" },
          { label: "Global Partners", val: "40+" },
          { label: "Specialized Sectors", val: "12" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group"
          >
            <div className="text-4xl font-black text-cyan-400 mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Team CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/5 to-transparent p-16 rounded-[3rem] border border-white/5 backdrop-blur-sm"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to scale with ZENTORA?</h2>
        <p className="text-slate-400 mb-10 text-lg px-4">Whether you are hiring for a critical role or looking for your next career move, our founders are ready to guide you.</p>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 text-black px-12 py-5 rounded-full font-black uppercase tracking-wider hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          Talk to a Founder
        </button>
      </motion.div>

      {/* --- CINEMATIC MODAL --- */}
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
              className="bg-slate-900 border border-white/10 p-10 rounded-[2.5rem] max-w-md w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Contact Founding Team</h3>
              <p className="text-slate-400 mb-8 text-sm">Choose your preferred way to reach us.</p>

              <div className="space-y-4">
                {/* Option 1: Copy Email */}
                <button 
                  onClick={handleCopy}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all group flex flex-col items-center"
                >
                  <span className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Click to Copy Email</span>
                  <span className="text-lg text-cyan-400 font-mono">{copied ? "COPIED!" : email}</span>
                </button>

                <div className="py-2 text-slate-600 text-xs font-bold">OR</div>

                {/* Option 2: Open Client */}
                <a 
                  href={`mailto:${email}?subject=Partnership Inquiry`}
                  className="block w-full p-5 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-white transition-colors"
                >
                  Open Default Mail App
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;