const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, TechSolutions',
    feedback:
      'HelpBot transformed the way we handle customer service. It is accurate and efficient, saving us countless hours and boosting satisfaction.',
  },
  {
    name: 'Jane Smith',
    title: 'Support Manager, RetailCo',
    feedback:
      'The 24/7 availability has been a game-changer. Customers get instant help, even outside business hours. Highly recommended.',
  },
  {
    name: 'Alice Johnson',
    title: 'Founder, StartupGenius',
    feedback:
      'Integration was seamless. Customers love the instant responses, and our team is free to focus on the complex issues.',
  },
];

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative scroll-mt-24 bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5">04 / Reviews</span>
          <h2 className="section-title">
            Loved by teams
            <br />
            <span className="text-white/35">and their customers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass flex flex-col p-8 transition duration-500 hover:border-white/20 hover:bg-white/[0.05]">
              <span className="font-display text-6xl leading-none text-sky/60">&ldquo;</span>
              <blockquote className="mt-2 flex-grow text-lg leading-relaxed text-white/80">{t.feedback}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky to-bold text-sm font-bold">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/45">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
