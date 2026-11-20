import { FiClock, FiZap, FiLink, FiShield, FiTrendingUp, FiUsers, FiArrowRight } from 'react-icons/fi';

// --glow is an "r, g, b" triple used by the .key surface
const featureData = [
  { title: 'Lightning-fast replies', description: 'Instant, accurate answers to customer questions, powered by modern AI.', icon: FiZap, glow: '30, 70, 219' },
  { title: 'Always on, 24/7', description: 'Support that never sleeps, with global coverage across every time zone.', icon: FiClock, glow: '103, 186, 244' },
  { title: 'Plug-in integration', description: 'Connect to your existing tools and workflows in minutes, not weeks.', icon: FiLink, glow: '40, 190, 110' },
  { title: 'Enterprise security', description: 'End-to-end encryption and compliance standards built in from day one.', icon: FiShield, glow: '120, 80, 230' },
  { title: 'Analytics dashboard', description: 'Clear insights into every conversation so you can keep improving.', icon: FiTrendingUp, glow: '30, 70, 219' },
  { title: 'Every channel', description: 'One consistent experience across chat, email, social and phone.', icon: FiUsers, glow: '200, 90, 160' },
];

// Tilted keycap cluster, inspired by the glowing-keyboard reference
const keys = [
  { label: 'Support', glow: '30, 70, 219', lit: true },
  { label: 'Billing', glow: '40, 190, 110' },
  { label: 'Orders', glow: '200, 90, 160' },
  { label: 'Tech', glow: '120, 80, 230' },
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">01 / Features</span>
            <h2 className="section-title">
              Built for teams that
              <br />
              <span className="text-white/35">care about every reply.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/50">
            Everything you need to deliver fast, human-feeling support at scale, in one calm, focused workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureData.map(({ title, description, icon: Icon, glow }) => (
            <div key={title} className="key group p-8" style={{ '--glow': glow }}>
              <div
                className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 text-xl text-white"
                style={{ background: `rgba(${glow}, .35)`, boxShadow: `0 0 30px rgba(${glow}, .6)` }}
              >
                <Icon />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold tracking-tight">{title}</h3>
              <p className="leading-relaxed text-white/50">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA band with tilted glowing keys */}
        <div className="grain relative mt-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900">
          <div className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-bold/25 blur-[100px]" />
          <div className="relative z-[2] grid items-center gap-10 p-10 md:grid-cols-2 md:p-16">
            <div>
              <span className="eyebrow mb-5">Get started</span>
              <h3 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Every question,
                <br />
                one keystroke away.
              </h3>
              <p className="mt-5 max-w-md text-white/50">
                Join thousands of businesses using HelpBot to deliver exceptional customer experiences.
              </p>
              <a href="#pricing" className="btn-pill mt-8">
                See plans <FiArrowRight />
              </a>
            </div>

            <div className="flex h-72 items-center justify-center [perspective:1200px] md:h-80">
              <div className="grid grid-cols-2 gap-5 [transform:rotateX(52deg)_rotateZ(-38deg)] [transform-style:preserve-3d]">
                {keys.map((k) => (
                  <div
                    key={k.label}
                    className={`key flex h-32 w-32 items-center justify-center md:h-36 md:w-36 ${k.lit ? 'key-lit' : ''}`}
                    style={{ '--glow': k.glow, boxShadow: `0 18px 0 -2px rgba(${k.glow}, .25), 0 40px 90px -20px rgba(${k.glow}, .9)` }}
                  >
                    <span className={`text-sm font-medium ${k.lit ? 'text-white [text-shadow:0_0_14px_rgba(255,255,255,.8)]' : 'text-white/60 blur-[0.4px]'}`}>
                      {k.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
