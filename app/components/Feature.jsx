import { FiClock, FiZap, FiLink, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';
import React from "react";

const Features = () => {
  const featureData = [
    {
      title: "Lightning Fast Response",
      description: "Get instant, accurate responses to customer queries with our advanced AI technology.",
      icon: <FiZap className="text-5xl" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock customer support that never sleeps, ensuring global coverage.",
      icon: <FiClock className="text-5xl" />,
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Seamless Integration",
      description: "Effortlessly integrate with your existing systems and workflows in minutes.",
      icon: <FiLink className="text-5xl" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards.",
      icon: <FiShield className="text-5xl" />,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights and analytics to optimize your customer service.",
      icon: <FiTrendingUp className="text-5xl" />,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Multi-Channel Support",
      description: "Unified experience across email, chat, social media, and phone channels.",
      icon: <FiUsers className="text-5xl" />,
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-5xl font-black mb-6 text-gray-800">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools designed to transform your customer service experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${feature.bgColor} border border-gray-200/50 backdrop-blur-sm`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating icon background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className={`text-6xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <div className="text-white">
                    {React.cloneElement(feature.icon, { className: "text-2xl" })}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Animated arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-blue-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Service?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using HelpBot to deliver exceptional customer experiences
            </p>
            <button className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100 border-none rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;