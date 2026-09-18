import { motion } from 'framer-motion'

export default function About() {
  const skills = ["React", "JavaScript", "Tailwind", "HTML/CSS", "Framer Motion", "React Router"];

  return (
    <div className="bg-[#0a0a0a] text-white py-24 px-8 md:px-20 flex flex-col md:flex-row gap-12 md:gap-20 border-t border-zinc-900 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2"
      >
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">About Me</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-white mt-6"
        ></motion.div>

        <div className="mt-10 hidden md:block">
          <p className="text-zinc-500 text-sm tracking-widest uppercase">Based in</p>
          <p className="text-lg">Hangu, Pakistan — Available worldwide (Remote)</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:w-1/2"
      >
        <p className="text-[17px] text-zinc-300 leading-[1.8] font-light">
          Hello! I'm Umar, a passionate Frontend Developer from Pakistan. I enjoy creating things that live on the internet, with a strong focus on performance and user experience.
        </p>
        <p className="text-[17px] text-zinc-400 leading-[1.8] font-light mt-5">
          My main focus these days is building responsive and user-friendly websites using React, JavaScript and Tailwind CSS. I love learning new technologies and turning complex problems into simple, beautiful interfaces.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              className="border border-zinc-800 bg-[#141414] px-5 py-2.5 rounded-full text-sm text-zinc-300 cursor-default transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}