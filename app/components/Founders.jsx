import Image from 'next/image';

const founders = [
  { name: 'Obidur Rahman', role: 'CEO & Co-Founder', image: '/obidur.jpg' },
  { name: 'Mehreen Mallick Fiona', role: 'COO & Co-Founder', image: '/mehreen.jpg' },
  { name: 'Hasanul Banna Himel', role: 'CTO & Co-Founder', image: '/himel.jpg' },
  { name: 'Zaynul Abedin Miah', role: 'CMO & Co-Founder', image: '/zaynul.jpg' },
];

export default function Founders() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {founders.map((founder, index) => (
          <div key={index} className="text-center group">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-105 shadow-lg">
              <Image
                src={founder.image}
                alt={founder.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority={index === 0}
              />
            </div>
            <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
              {founder.name}
            </h2>
            <p className="text-gray-600">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
