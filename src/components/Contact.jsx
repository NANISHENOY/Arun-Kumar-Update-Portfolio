
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been noted.')
    e.currentTarget.reset()
  }
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form onSubmit={onSubmit} className="card space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3"/>
            <input required type="email" placeholder="Your email" className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3"/>
          </div>
          <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3"></textarea>
          <button className="btn">Send</button>
          {status && <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>}
        </form>
      </div>
    </section>
  )
}
