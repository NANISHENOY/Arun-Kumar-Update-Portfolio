
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="space-y-4">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-slate-600 dark:text-slate-300">
            I'm a React-focused front‑end developer who enjoys turning ideas into pixel‑perfect, performant UIs.
            I love clean code, reusable components, and good DX.
          </p>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li className="card">🎓 BE in CSE — 2025</li>
            <li className="card">✅ React Certification</li>
            <li className="card">🧠 DSA with Python</li>
            <li className="card">🚀 Looking for Front-End roles</li>
          </ul>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}} className="card">
          <h3 className="text-xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Built a full E‑commerce Shopping Mart with React.</li>
            <li>Created ML projects: Plant Disease Prediction & Face Mask Detection (CNN).</li>
            <li>Comfortable with Git, REST APIs, and responsive design.</li>
            <li>Strong problem solving; practicing LeetCode & classic algorithms.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
