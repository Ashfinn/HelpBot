import Link from 'next/link';
import Mascot from './Mascot';

// Shared dark layout for sign-in / sign-up, styled after the reference onboarding screen.
export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-4 py-16">
      <div className="horizon top-[-62%] animate-breathe md:top-[-95%]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-bold/25 blur-[120px]" />

      <div className="relative z-[2] w-full max-w-sm text-center">
        <Link href="/" className="mx-auto mb-8 block h-16 w-16 rounded-full shadow-[0_0_50px_rgba(103,186,244,.5)] ring-1 ring-white/20">
          <Mascot />
        </Link>
        <h1 className="font-display text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-white/50">{subtitle}</p>

        <div className="mt-10 space-y-3 text-left">{children}</div>

        {footer && <p className="mt-8 text-sm text-white/50">{footer}</p>}
        <p className="mt-10 text-xs leading-relaxed text-white/30">
          By continuing, you agree to the <span className="text-white/60">Terms of Service</span> and{' '}
          <span className="text-white/60">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
