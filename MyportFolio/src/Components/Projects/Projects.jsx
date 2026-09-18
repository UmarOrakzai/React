import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    { id: 1, title: "Portfolio Website", tech: "React + Tailwind", desc: "Personal portfolio with modern animations" },
    { id: 2, title: "E-commerce Store", tech: "React + JS", desc: "Full shopping cart & checkout flow" },
    { id: 3, title: "Weather App", tech: "API + React", desc: "Live weather with GitHub loader" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20 border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold tracking-tight">My Projects</h2>
        <div className="w-20 h-1 bg-white mt-4 mb-12"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-[#141414] p-6 rounded-[24px] border border-zinc-900 hover:border-zinc-700 transition-colors cursor-pointer group"
          >
            <div className="h-40 bg-[#1a1a1a] rounded-2xl mb-5 flex items-center justify-center text-zinc-600 group-hover:bg-[#222] transition">
              <span className="text-sm tracking-widest">IMAGE</span>
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-zinc-500 text-sm mt-1">{project.desc}</p>
            <p className="text-zinc-400 mt-3 text-[13px] border border-zinc-800 inline-block px-3 py-1 rounded-full">{project.tech}</p>
            <button className="mt-5 text-white text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              View Project <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}