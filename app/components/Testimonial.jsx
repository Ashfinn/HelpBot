import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  { 
    name: 'John Doe', 
    title: 'CEO, TechSolutions', 
    image: '/john.jpg', 
    feedback: 'HelpBot has transformed the way we handle customer service. The AI is incredibly accurate and efficient, saving us countless hours and significantly boosting customer satisfaction.' 
  },
  { 
    name: 'Jane Smith', 
    title: 'Customer Service Manager, RetailCo', 
    image: '/jane.jpg', 
    feedback: 'The 24/7 availability of HelpBot has been a game-changer. Our customers appreciate the instant support, even outside of traditional business hours. Highly recommended!' 
  },
  { 
    name: 'Alice Johnson', 
    title: 'Founder, StartupGenius', 
    image: '/alice.jpg', 
    feedback: 'Integration with HelpBot was seamless and incredibly easy. Our customers love the instant responses, and it freed up our team to focus on more complex issues. A must-have!' 
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8 shadow-lg">
            <FaStar className="text-white text-2xl" />
          </div>
          <h2 className="text-5xl font-black mb-6 text-gray-800">
            Hear from
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Our Happy Users</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover why top companies trust HelpBot to elevate their customer experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-200">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="absolute top-8 left-8 h-12 w-12 text-purple-200/40" />

                  {/* Feedback */}
                  <div className="flex-grow mb-6">
                    <p className="relative z-10 text-lg leading-7 text-gray-700">
                      {testimonial.feedback}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="relative z-10 flex items-center gap-x-4 border-t border-gray-200 pt-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 py-3 px-6 rounded-xl font-bold text-lg text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    Read Full Story
                    <span className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}