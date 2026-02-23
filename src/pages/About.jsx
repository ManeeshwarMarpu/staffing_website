import { motion } from "framer-motion";

const About = () => {
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
            Our mission is to empower the world's most innovative companies by connecting them with the top 1% of specialized talent across the globe. We don't just fill seats; we fuel growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Cinematic Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative aspect-video bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
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
        <p className="text-slate-400 mb-10 text-lg">Whether you are hiring for a critical role or looking for your next career move, our founders are ready to guide you.</p>
        
        <a 
          href="mailto:hr.zentora@gmail.com?subject=Inquiry%20for%20ZENTORA%20Founder&body=Hello,%20I%20would%20like%20to%20discuss..."
          className="relative bg-cyan-500 text-black px-12 py-5 rounded-full font-black uppercase tracking-wider hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)] inline-block"
        >
          Talk to a Founder
        </a>
      </motion.div>
    </div>
  );
};

export default About;