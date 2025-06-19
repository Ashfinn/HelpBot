import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">🤖</span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  HelpBot
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Revolutionizing customer support with AI-powered solutions that deliver exceptional experiences 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/helpbot" 
                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/helpbot" 
                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:scale-110">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/helpbot" 
                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/helpbot" 
                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://github.com/helpbot" 
                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                Quick Links
              </h3>
              <nav className="space-y-3">
                {['About Us', 'Features', 'Pricing', 'Documentation', 'API Reference', 'Status Page'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} 
                        className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                    <FiArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></span>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <FiMail className="w-4 h-4 text-white" />
                  </div>
                  <a href="mailto:support@helpbot.com" className="hover:underline">
                    support@helpbot.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-4 h-4 text-white" />
                  </div>
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-4 h-4 text-white" />
                  </div>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Founders */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></span>
                Our Founders
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/obidur-rahman-shawal/" 
                        className="text-blue-400 hover:text-blue-300 font-semibold block">
                    Obidur Rahman
                  </Link>
                  <p className="text-gray-400 text-sm">CEO & Co-Founder</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/mehreen-mallick-fiona/" 
                        className="text-purple-400 hover:text-purple-300 font-semibold block">
                    Mehreen Mallick Fiona
                  </Link>
                  <p className="text-gray-400 text-sm">COO & Co-Founder</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/hasanul-banna-himel/" 
                        className="text-green-400 hover:text-green-300 font-semibold block">
                    Hasanul Banna Himel
                  </Link>
                  <p className="text-gray-400 text-sm">CTO & Co-Founder</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/zaynul-abedin-miah/" 
                        className="text-orange-400 hover:text-orange-300 font-semibold block">
                    Zaynul Abedin Miah
                  </Link>
                  <p className="text-gray-400 text-sm">CMO & Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-300">Get the latest updates and insights from HelpBot</p>
              </div>
              <div className="flex space-x-3 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 rounded-full flex-1 md:w-64"
                />
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white rounded-full px-6 hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} HelpBot. All rights reserved. Built with ❤️ for better customer experiences.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}