
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E‑commerce Shopping Mart',
    desc: 'A React-based store with product listing, cart, and checkout. Focus on reusable components and state management.',
    tech: ['React', 'Context API', 'Tailwind'],
    link: '#',
    repo: '#',
    image: 'public/Screenshot From 2025-09-01 15-04-57.png',
    
  },
  {
    title: 'Plant Disease Prediction',
    desc: 'Image classification to detect leaf diseases. Built dataset pipeline and model integration.',
    tech: ['Python', 'CNN', 'Flask'],
    link: '#',
    repo: '#',
    image:' /public/image.png.avif'
  },
  {
    title: 'Face Mask Detection',
    desc: 'Real-time detection of mask usage using CNN and webcam feed.',
    tech: ['Python', 'OpenCV', 'CNN'],
    link: '#',
    repo: '#',
    image:'/public/Untitled.jpg'
    
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
           <motion.article key={p.title}
           initial={{opacity:0, y:20}}
           whileInView={{opacity:1, y:0}}
           viewport={{once:true}}
           transition={{duration:.5, delay: idx*.1}}
           className="card flex flex-col"
         >
           <img 
             src={p.image} 
             alt={p.title} 
             className="aspect-video object-cover rounded-xl mb-4" 
           />
         
           <h3 className="text-xl font-semibold">{p.title}</h3>
           <p className="text-slate-600 dark:text-slate-300 mt-1">{p.desc}</p>
           <ul className="flex flex-wrap gap-2 mt-3">
             {p.tech.map(t => (
               <li key={t} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm">{t}</li>
             ))}
           </ul>
           <div className="mt-4 flex gap-3">
             <a href={p.link} className="btn">Live</a>
             <a href={p.repo} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700">Code</a>
           </div>
         </motion.article>
         
          ))}
        </div>
      </div>
    </section>
  )
}
