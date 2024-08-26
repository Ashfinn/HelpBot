import Image from 'next/image';

const testimonials = [
  { name: 'John Doe', image: '/john.jpg', feedback: 'HelpBot has transformed the way we handle customer service. The AI is incredibly accurate and efficient.' },
  { name: 'Jane Smith', image: '/jane.jpg', feedback: 'The 24/7 availability of HelpBot has been a game-changer for our business. Highly recommended!' },
  { name: 'Alice Johnson', image: '/alice.jpg', feedback: 'Integration with HelpBot was seamless and easy. Our customers love the instant responses.' },
];

export default function TestimonialsSection() {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center text-primary">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-base-100 shadow-lg rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {testimonial.name}
            </h3>
            <p className="text-neutral-content text-sm">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
