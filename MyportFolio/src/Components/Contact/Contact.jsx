import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 md:px-20 py-20 border-t border-zinc-900">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-0 bg-[#141414] rounded-[32px] overflow-hidden border border-zinc-900">

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Let's talk</h1>
          <p className="text-zinc-400 mb-10 text-[15px] leading-relaxed">
            Have a project in mind? Feel free to contact. I'll get back to you within 24 hours.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition">📧</div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
                <p className="text-[15px]">umarorakzai315@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#1a1a1a] border border-zinc-800 rounded-full flex items-center justify-center group-hover:scale-110 transition">📍</div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                <p className="text-[15px]">Hangu, KPK, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 bg-[#1a1a1a] rounded-2xl border border-zinc-900">
            <p className="text-sm text-zinc-400">⚡ Average response time: 2 hours</p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4 bg-[#1a1a1a] p-8 md:p-12"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#141414] border border-zinc-800 rounded-xl px-4 py-3 w-full outline-none focus:border-zinc-600 transition text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#141414] border border-zinc-800 rounded-xl px-4 py-3 w-full outline-none focus:border-zinc-600 transition text-sm"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#141414] border border-zinc-800 rounded-xl px-4 py-3 w-full outline-none focus:border-zinc-600 transition text-sm"
          />

          <textarea
            rows="4"
            placeholder="Your Message..."
            className="bg-[#141414] border border-zinc-800 rounded-xl px-4 py-3 w-full outline-none focus:border-zinc-600 transition resize-none text-sm"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-zinc-100 transition text-sm"
          >
            Send Message
          </motion.button>

          <p className="text-[11px] text-zinc-500 text-center mt-2">I'll reply within 24 hours • No spam</p>
        </motion.form>

      </div>
    </div>
  )
}

export default Contact