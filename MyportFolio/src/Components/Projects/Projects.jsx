import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      tech: "React + Tailwind",
      desc: "Personal portfolio with modern animations",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", // Portfolio Dashboard
      link: "https://reactwithumar.vercel.app/"
    },
    {
      id: 2,
      title: "E-commerce Store",
      tech: "React + JS",
      desc: "Full shopping cart & checkout flow",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80", // E-commerce Shopping
      link: "https://reactwithumar.vercel.app/"
    },
    {
      id: 3,
      title: "Weather App",
      tech: "API + React",
      desc: "Live weather with GitHub loader",
      img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80", // Weather App
      link: "https://github.com/UmarOrakzai/javascript_practice/tree/main/09_advance/weather_project"
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20 border-t border-zinc-900">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="h-40 bg-[#1a1a1a] rounded-2xl mb-5 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
            </a>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-zinc-500 text-sm mt-1">{project.desc}</p>
            <p className="text-zinc-400 mt-3 text-[13px] border border-zinc-800 inline-block px-3 py-1 rounded-full">{project.tech}</p>
            <a href={project.link} target="_blank" className="mt-5 text-white text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all inline-flex">
              View Project <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}