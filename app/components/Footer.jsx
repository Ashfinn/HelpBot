import Link from 'next/link';
import Mascot from './Mascot';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const socials = [
  { href: 'https://www.facebook.com/helpbot', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://twitter.com/helpbot', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/company/helpbot', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://instagram.com/helpbot', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://github.com/helpbot', icon: FaGithub, label: 'GitHub' },
];

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'Reviews', href: '/#reviews' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Obidur Rahman, CEO', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
      { name: 'Mehreen Mallick Fiona, COO', href: 'https://www.linkedin.com/in/mehreen-mallick-fiona/' },
      { name: 'Hasanul Banna Himel, CTO', href: 'https://www.linkedin.com/in/hasanul-banna-himel/' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'support@helpbot.com', href: 'mailto:support@helpbot.com' },
      { name: '+1 (234) 567-8900', href: 'tel:+12345678900' },
      { name: 'San Francisco, CA', href: null },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden border-t border-white/[0.06] bg-ink-900">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-bold/25 blur-[140px]" />

      <div className="relative z-[2] mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full ring-1 ring-white/20">
                <Mascot />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">HelpBot</span>
            </div>
            <p className="mt-5 max-w-xs leading-relaxed text-white/50">
              AI-powered customer support that delivers exceptional experiences, 24/7.
            </p>

            <div className="mt-8 flex max-w-sm gap-2">
              <input type="email" placeholder="Your email" className="field !rounded-full !py-3" />
              <button type="button" className="btn-pill shrink-0 !px-5 !py-3 !text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-5">{col.title}</p>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.name}>
                    {l.href ? (
                      <Link href={l.href} className="text-white/60 transition hover:text-white">
                        {l.name}
                      </Link>
                    ) : (
                      <span className="text-white/60">{l.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] py-8 md:flex-row">
          <p className="text-sm text-white/40">&copy; {year} HelpBot. All rights reserved.</p>
          <div className="flex gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/40 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>

        {/* Oversized wordmark */}
        <p
          aria-hidden
          className="pointer-events-none select-none bg-gradient-to-b from-white/[0.10] to-transparent bg-clip-text text-center font-display text-[22vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent"
        >
          HelpBot
        </p>
      </div>
    </footer>
  );
}
