import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact us", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-white/5">
      <nav className="section-px flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
          {/* Drop your logo at /public/images/logo.png */}
          <img src="/images/logo.png" alt="Trade Savvy" className="h-[84px] w-[107px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#get-started"
          className="rounded-[12px] bg-[#FAD88E] px-6 py-2.5 text-sm font-semibold text-[#152442] hover:bg-gold-dark transition-colors"
        >
          Started Now
        </Link>
      </nav>
    </header>
  );
}
