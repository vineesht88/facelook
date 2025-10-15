const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Support', href: '/support' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">facelook</p>
          <p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} Facelook Labs. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navigation.map((item) => (
            <a key={item.label} className="transition hover:text-indigo-300" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
