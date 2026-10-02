import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const companyLinks = [
  { label: "About us", href: "/#about" },
  { label: "Contact us", href: "/#contact" },
  { label: "Blog", href: "#" },
];

const supportLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 text-navy">
      <div className="section-px mx-auto grid max-w-6xl grid-cols-1 gap-12 pb-12 sm:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* Drop your logo at /public/images/logo.png */}
            <img src="/images/logo.png" alt="Trade Savvy" className="h-auto w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-navy/60">
            Rent, lend, and earn securely within our trusted community.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy/60">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-navy transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy/60">
            {supportLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-navy transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 text-navy/60 hover:bg-navy hover:text-white transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10 py-6 text-center text-xs text-navy/50">
        © 2025 Trade Savvy. All rights reserved.
      </div>
    </footer>
  );
}
