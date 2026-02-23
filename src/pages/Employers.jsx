import { motion } from "framer-motion";

const Employers = () => {
  const founderEmail = "mailto:hr.zentora@gmail.com?subject=Partnership%20Inquiry&body=Hello,%20we%20are%20looking%20to%20partner%20with%20ZENTORA...";

  const services = [
    {
      title: "IT Staffing",
      desc: "Specialized sourcing for React, Node, DevOps, and AI Architects.",
      icon: "⚡",
      color: "from-cyan-500/20"
    },
    {
      title: "Healthcare",
      desc: "Dedicated placement for RNs, Practitioners, and Clinical Admin.",
      icon: "🏥",
      color: "from-blue-500/20"
    },
    {
      title: "Engineering",
      desc: "Vetted leads for Civil, Mechanical, and Electrical infrastructure.",
      icon: "⚙️",
      color: "from-purple-500/20"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs"
          >
            For Organizations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 tracking-tighter"
          >
            WORLD-CLASS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              PARTNERSHIPS
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We don't just provide resumes; we provide the top 1% of vetted talent 
            tailored to your company's technical culture and growth goals.
          </motion.p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[2.5rem] bg-gradient-to-b ${service.color} to-transparent border border-white/5 overflow-hidden group`}
            >
              <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="h-1 w-12 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action: Instead of a button, a "Founder Card" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-[3rem] bg-slate-900/40 border border-white/10 p-12 md:p-20 overflow-hidden text-center backdrop-blur-xl"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl font-bold text-white mb-6">Ready to scale your team?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Skip the automated forms. Speak directly with our founding team to discuss 
            your specific project requirements and talent needs.
          </p>

          <a 
            href={founderEmail}
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/10"
          >
            Discuss with a Founder
            <span className="text-xl">↗</span>
          </a>
          
          <div className="mt-8 flex justify-center gap-8">
             <div className="text-center">
                <p className="text-white font-bold">24h</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Response Time</p>
             </div>
             <div className="w-[1px] h-8 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-bold">1-on-1</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Consultation</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Employers;