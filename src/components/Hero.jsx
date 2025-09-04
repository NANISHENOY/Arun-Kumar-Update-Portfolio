
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm">Front-End Developer</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Hi, I'm Arun Kumar 👋</h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            BE CSE (2025) with a React certification. I build fast, accessible, and beautiful
            web apps. Projects include an E‑commerce Shopping Mart, Plant Disease Prediction,
            and Face Mask Detection using CNN.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn">View Projects <ArrowRight size={18}/></a>
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18}/> GitHub
            </a>
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18}/> LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: .1 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500/10 to-cyan-300/10 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <img src="/profile-placeholder.png" alt="Arun Kumar" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-2 shadow-sm">
            <p className="text-sm">Open to Front-End roles</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
