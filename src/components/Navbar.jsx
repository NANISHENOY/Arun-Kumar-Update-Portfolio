
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const items = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight">Arun<span className="text-brand-600">Kumar</span></a>
        <nav className="hidden md:flex items-center gap-6">
          {items.map(i => (
            <Link key={i.to} to={i.to} spy smooth offset={-64} duration={500} className="cursor-pointer hover:text-brand-600">
              {i.label}
            </Link>
          ))}
          <button aria-label="Toggle theme" onClick={() => setDark(d => !d)} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </nav>
        <button className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800" onClick={() => setOpen(o=>!o)}>
          <Menu/>
        </button>
        {open && (
          <div className="absolute top-16 inset-x-0 md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
              {items.map(i => (
                <Link key={i.to} to={i.to} spy smooth offset={-64} duration={500} className="cursor-pointer py-1" onClick={()=>setOpen(false)}>
                  {i.label}
                </Link>
              ))}
              <button onClick={() => setDark(d => !d)} className="btn w-full justify-center">{dark ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
