import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

const founders = [
  {
    name: 'Obidur Rahman',
    role: 'CEO & Co-Founder',
    image: '/obidur.jpg',
    description: 'Visionary leader with 10+ years in AI and customer service innovation.',
    linkedin: 'https://www.linkedin.com/in/obidur-rahman-shawal/',
  },
  {
    name: 'Mehreen Mallick Fiona',
    role: 'COO & Co-Founder',
    image: '/mehreen.jpg',
    description: 'Operations expert focused on scaling customer success and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/mehreen-mallick-fiona/',
  },
  {
    name: 'Hasanul Banna Himel',
    role: 'CTO & Co-Founder',
    image: '/himel.jpg',
    description: 'Technical architect building the future of AI-powered customer support.',
    linkedin: 'https://www.linkedin.com/in/hasanul-banna-himel/',
  },
];

export default function Founders() {
  return (
    <section id="team" className="relative scroll-mt-24 bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5">02 / Team</span>
          <h2 className="section-title">
            The people
            <br />
            <span className="text-white/35">behind HelpBot.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {founders.map((f, i) => (
            <div key={f.name} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  priority={i === 0}
                />
                {/* blue duotone wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-bold/20 mix-blend-normal transition-opacity duration-700 group-hover:opacity-70" />
                <span className="absolute left-5 top-5 font-display text-xs font-semibold tracking-widest text-white/50">
                  0{i + 1}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow mb-2 !text-sky">{f.role}</p>
                <h3 className="font-display text-2xl font-bold tracking-tight">{f.name}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {f.description}
                </p>
                <Link
                  href={f.linkedin}
                  target="_blank"
                  className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:bg-white hover:text-ink"
                  aria-label={`${f.name} on LinkedIn`}
                >
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
