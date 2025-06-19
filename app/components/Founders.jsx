import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const founders = [
  {
    name: 'Obidur Rahman',
    role: 'CEO & Co-Founder',
    image: '/obidur.jpg',
    description: 'Visionary leader with 10+ years in AI and customer service innovation.',
    linkedin: 'https://www.linkedin.com/in/obidur-rahman-shawal/',
    twitter: '#',
    github: '#',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Mehreen Mallick Fiona',
    role: 'COO & Co-Founder',
    image: '/mehreen.jpg',
    description: 'Operations expert focused on scaling customer success and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/mehreen-mallick-fiona/',
    twitter: '#',
    github: '#',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Hasanul Banna Himel',
    role: 'CTO & Co-Founder',
    image: '/himel.jpg',
    description: 'Technical architect building the future of AI-powered customer support.',
    linkedin: 'https://www.linkedin.com/in/hasanul-banna-himel/',
    twitter: '#',
    github: '#',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Zaynul Abedin Miah',
    role: 'CMO & Co-Founder',
    image: '/zaynul.jpg',
    description: 'Marketing strategist driving growth and brand recognition in the AI space.',
    linkedin: 'https://www.linkedin.com/in/zaynul-abedin-miah/',
    twitter: '#',
    github: '#',
    color: 'from-orange-500 to-red-600'
  },
];

export default function Founders() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-8 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-5xl font-black mb-6 text-gray-800">
            Meet Our
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Visionary Founders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind HelpBot, combining decades of experience in AI, technology, and customer service
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${founder.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-110`}></div>
                  <div className={`relative w-32 h-32 mx-auto rounded-full ring-4 ring-gray-100 group-hover:ring-8 group-hover:ring-opacity-50 transition-all duration-500 overflow-hidden bg-gradient-to-r ${founder.color} p-1`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${founder.color} bg-clip-text text-transparent`}>
                  {founder.name}
                </h3>
                <p className="text-gray-600 font-semibold mb-4 text-lg">
                  {founder.role}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300">
                  {founder.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Link
                    href={founder.linkedin}
                    className={`w-10 h-10 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </Link>
                  <Link
                    href={founder.twitter}
                    className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </Link>
                  <Link
                    href={founder.github}
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <FaGithub className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-r ${founder.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}