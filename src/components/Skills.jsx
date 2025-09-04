
import { motion } from 'framer-motion'

const skills = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git & GitHub',
  'Vite', 'REST APIs', 'Redux/Context', 'Framer Motion', 'Responsive Design'
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <motion.ul initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.li
              key={s}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.3, delay: i * .03}}
              className="card text-center font-medium"
            >
              {s}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
