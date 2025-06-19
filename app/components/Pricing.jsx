import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa"; // Corrected to FaShieldAlt if FaShield is not found

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for individuals",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      originalMonthlyPrice: null,
      description: "Essential AI assistance for personal use and small projects.",
      icon: <FaStar className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        { text: "50 AI conversations/month", included: true },
        { text: "Basic response templates", included: true },
        { text: "Email support", included: true },
        { text: "Standard response time", included: true },
        { text: "Advanced analytics", included: false },
        { text: "Custom integrations", included: false }
      ],
      buttonText: "Start Free",
      popular: false,
      stats: {
        users: "10K+",
        satisfaction: "4.5★"
      }
    },
    {
      name: "Professional",
      subtitle: "Best for growing teams",
      monthlyPrice: 49,
      yearlyPrice: 39,
      originalMonthlyPrice: 69,
      description: "Advanced AI features with priority support for scaling businesses.",
      icon: <FaRocket className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        { text: "Unlimited AI conversations", included: true },
        { text: "Custom response training", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "API access & webhooks", included: true },
        { text: "Team collaboration tools", included: true },
        { text: "White-label options", included: false }
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      badge: "Most Popular",
      stats: {
        users: "50K+",
        satisfaction: "4.8★"
      }
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      monthlyPrice: 149,
      yearlyPrice: 119,
      originalMonthlyPrice: 199,
      description: "Complete AI solution with dedicated support and custom deployment.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom AI model training", included: true },
        { text: "SLA & 99.9% uptime guarantee", included: true },
        { text: "On-premise deployment", included: true },
        { text: "Advanced security & compliance", included: true },
        { text: "Custom integrations", included: true }
      ],
      buttonText: "Contact Sales",
      popular: false,
      stats: {
        users: "5K+",
        satisfaction: "4.9★"
      }
    }
  ];

  const getPrice = (plan) => {
    if (plan.monthlyPrice === "Free") return "Free";
    return billingCycle === 'monthly'
      ? `$${plan.monthlyPrice}`
      : `$${plan.yearlyPrice}`;
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === "Free") return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice * 12;
    const savings = Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
    return billingCycle === 'yearly' ? `Save ${savings}%` : null;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8 shadow-lg">
            <FaChartLine className="text-white text-2xl" />
          </div>

          <h2 className="text-5xl font-black mb-6 text-gray-800">
            Choose Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Scale your AI customer support with flexible pricing designed for businesses of every size
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-gray-800' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-gray-800' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Save up to 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const savings = getSavings(plan);
            return (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
                }`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${
                  plan.popular ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-200'
                } ${hoveredPlan === index ? 'transform scale-105' : ''}`}>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <div className="text-white">
                          {plan.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-black text-gray-800">
                            {getPrice(plan)}
                          </span>
                          {plan.monthlyPrice !== "Free" && (
                            <span className="text-gray-600 ml-2">
                              /{billingCycle === 'monthly' ? 'mo' : 'mo'}
                            </span>
                          )}
                        </div>
                        
                        {plan.originalMonthlyPrice && (
                          <div className="flex items-center justify-center mt-2">
                            <span className="text-gray-400 line-through mr-2">
                              ${billingCycle === 'monthly' ? plan.originalMonthlyPrice : plan.originalMonthlyPrice * 12 / 12}/mo
                            </span>
                            {savings && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                                {savings}
                              </span>
                            )}
                          </div>
                        )}
                        
                        {billingCycle === 'yearly' && plan.monthlyPrice !== "Free" && (
                          <p className="text-sm text-gray-600 mt-2">
                            Billed annually (${plan.yearlyPrice * 12})
                          </p>
                        )}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="flex-grow mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                              feature.included 
                                ? `bg-gradient-to-r ${plan.color}` 
                                : 'bg-gray-200'
                            }`}>
                              {feature.included ? (
                                <FaCheckCircle className="text-white text-xs" />
                              ) : (
                                <span className="text-gray-400 text-xs">×</span>
                              )}
                            </div>
                            <span className={`text-sm ${
                              feature.included ? 'text-gray-700' : 'text-gray-400'
                            }`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl">
                      <div className="text-center">
                        <div className="flex items-center text-gray-600">
                          <FaUsers className="mr-1 text-xs" />
                          <span className="text-sm font-semibold">{plan.stats.users}</span>
                        </div>
                        <span className="text-xs text-gray-500">Users</span>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-600">{plan.stats.satisfaction}</div>
                        <span className="text-xs text-gray-500">Rating</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl focus:ring-purple-300`
                        : `border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus:ring-gray-300`
                    } flex items-center justify-center group`}>
                      <span>{plan.buttonText}</span>
                      <FaArrowRight className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Large enterprise or unique requirements? Let's discuss a tailored plan that fits your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                  <FaShieldAlt className="mr-2" />
                  Enterprise Demo
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center">
                  Contact Sales Team
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Have questions about our pricing?</p>
          <button className="text-purple-600 hover:text-purple-700 font-semibold underline">
            View Frequently Asked Questions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;