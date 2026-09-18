import { useLoaderData } from 'react-router-dom'
import { motion } from 'framer-motion'

export async function githubLoader() {
  const res = await fetch('https://api.github.com/users/UmarOrakzai')
  return res.json()
}

export default function Github() {
  const data = useLoaderData()

  return (
    <div className="min-h-[80vh] bg-[#0a0a0a] text-white flex items-center justify-center p-6 md:p-20 border-t border-zinc-900">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#141414] border border-zinc-900 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center w-full max-w-3xl"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          src={data.avatar_url}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full border-[4px] border-[#1f1f1f] object-cover"
        />

        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-semibold tracking-tight"
          >
            {data.name || "Umar Orakzai"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 mt-2 text-[15px] leading-relaxed"
          >
            {data.bio || "Frontend Developer crafting high-performance web experiences."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <span className="bg-[#1a1a1a] border border-zinc-800 px-4 py-1.5 rounded-full text-sm">
              👥 {data.followers} Followers
            </span>
            <span className="bg-[#1a1a1a] border border-zinc-800 px-4 py-1.5 rounded-full text-sm">
              📦 {data.public_repos} Repos
            </span>
            <span className="bg-[#1a1a1a] border border-zinc-800 px-4 py-1.5 rounded-full text-sm">
              📍 {data.location || "Hangu, Pakistan"}
            </span>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            href={data.html_url}
            target="_blank"
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition mt-6 inline-block"
          >
            View GitHub Profile →
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}