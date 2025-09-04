
export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Arun Kumar. Built with React & Tailwind.
      </div>
    </footer>
  )
}
