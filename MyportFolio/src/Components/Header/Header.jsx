import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-3 px-4 text-sm tracking-wide transition
     ${isActive ? 'text-white bg-zinc-900 rounded-full' : 'text-zinc-400 hover:text-white'}`;

  return (
    <nav className="bg-[#0a0a0a] text-white border-b border-zinc-900 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-24 py-4">
        <h1 className="font-semibold text-xl tracking-tight">Umar.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 bg-[#141414] border border-zinc-800 rounded-full p-1">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="About" className={linkClass}>About</NavLink></li>
          <li><NavLink to="Projects" className={linkClass}>Project</NavLink></li>
          <li><NavLink to="Contact" className={linkClass}>Contact</NavLink></li>
          <li><NavLink to="github" className={linkClass}>Github</NavLink></li>
        </ul>

        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 bg-[#141414] border border-zinc-800 rounded-full flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-4 h-0.5 bg-white transition ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-4 h-0.5 bg-white transition ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col gap-2 px-6 pb-6"
          >
            <li onClick={() => setOpen(false)}><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li onClick={() => setOpen(false)}><NavLink to="About" className={linkClass}>About</NavLink></li>
            <li onClick={() => setOpen(false)}><NavLink to="Projects" className={linkClass}>Project</NavLink></li>
            <li onClick={() => setOpen(false)}><NavLink to="Contact" className={linkClass}>Contact</NavLink></li>
            <li onClick={() => setOpen(false)}><NavLink to="github" className={linkClass}>Github</NavLink></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}