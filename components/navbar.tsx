import Link from 'next/link';

const links = [
  { href: '/demo', label: 'Demo' },
  { href: '/places', label: 'Places' },
  { href: '/about', label: 'About' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-bg0/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold tracking-wide">
          NileEcho AI
        </Link>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/demo" className="btn-primary text-sm">
          Try Demo
        </Link>
      </nav>
    </header>
  );
}
