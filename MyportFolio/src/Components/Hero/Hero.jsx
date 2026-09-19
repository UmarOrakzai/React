import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-[90vh] flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-24 py-12 md:py-16 border-b border-zinc-900/50 overflow-hidden">

      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full md:w-[55%] mt-10 md:mt-0 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-1.5 mb-6 md:mb-8 mx-auto md:mx-0">
          <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <p className="text-[10px] md:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">Available for new opportunities</p>
        </div>

        <p className="text-zinc-500 text-[11px] md:text-[13px] tracking-[0.2em] uppercase mb-4 md:mb-5 font-medium">Hello, my name is</p>

        <h1 className="text-[42px] sm:text-6xl md:text-[5.2rem] font-semibold tracking-tight leading-[0.95]">
          Umar <span className="text-zinc-600">Orakzai.</span>
        </h1>

        <h2 className="text-[18px] sm:text-[22px] md:text-[26px] mt-4 font-light text-zinc-300 leading-snug max-w-xl mx-auto md:mx-0">
          Frontend Developer crafting <span className="text-white font-medium">high-performance</span> web experiences.
        </h2>

        <p className="mt-5 md:mt-6 max-w-[520px] text-zinc-400 text-[14px] md:text-[15px] leading-[1.7] font-light mx-auto md:mx-0">
          I specialize in building exceptional digital products with React and modern web technologies. Focused on performance, accessibility, and clean code.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 md:mt-9 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
        >
          <a href="/projects" className="w-full sm:w-auto bg-white text-black px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition text-center">
            View Projects
          </a>
          <a href="/contact" className="w-full sm:w-auto border border-zinc-800 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-900 transition text-center">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Your Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full md:w-[45%] flex justify-center md:justify-end"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full blur-[1px]"></div>
          <img
            src="/Images/Profile.jpeg"
            alt="Umar Profile"
            className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full object-cover border-[6px] border-[#141414]"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white text-black text-[10px] sm:text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl"
          >
            KPK • Pakistan
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}