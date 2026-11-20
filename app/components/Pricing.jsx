'use client';
import React, { useState } from 'react';
import { FiCheck, FiMinus, FiArrowRight } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    subtitle: 'For individuals',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Essential AI assistance for personal use and small projects.',
    features: [
      { text: '50 AI conversations / month', included: true },
      { text: 'Basic response templates', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Custom integrations', included: false },
    ],
    buttonText: 'Start free',
  },
  {
    name: 'Professional',
    subtitle: 'For growing teams',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'Advanced AI features with priority support for scaling businesses.',
    features: [
      { text: 'Unlimited AI conversations', included: true },
      { text: 'Custom response training', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'API access & webhooks', included: true },
    ],
    buttonText: 'Start Pro trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'Complete AI solution with dedicated support and custom deployment.',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom AI model training', included: true },
      { text: 'SLA & 99.9% uptime', included: true },
      { text: 'On-premise deployment', included: true },
    ],
    buttonText: 'Contact sales',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-ink py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bold/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="eyebrow mb-5">03 / Pricing</span>
          <h2 className="section-title">
            Simple plans.
            <span className="text-white/35"> Serious support.</span>
          </h2>

          {/* Billing toggle */}
          <div className="mt-10 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm">
            {['Monthly', 'Yearly'].map((label) => {
              const active = (label === 'Yearly') === yearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(label === 'Yearly')}
                  className={`rounded-full px-5 py-2 font-medium transition ${active ? 'bg-soft text-ink' : 'text-white/60 hover:text-white'}`}
                >
                  {label}
                  {label === 'Yearly' && <span className={`ml-2 text-xs ${active ? 'text-bold' : 'text-sky'}`}>-20%</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 ${plan.popular ? 'key key-lit lg:-my-4 lg:py-12' : 'key'}`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                    Most popular
                  </span>
                )}
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-white/50'}`}>{plan.subtitle}</p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{plan.name}</h3>

                <div className="mt-8 flex items-end gap-1">
                  <span className="font-display text-6xl font-extrabold tracking-tight">
                    {price === 0 ? 'Free' : `$${price}`}
                  </span>
                  {price !== 0 && <span className={`mb-2 ${plan.popular ? 'text-white/80' : 'text-white/40'}`}>/mo</span>}
                </div>
                <p className={`mt-1 h-5 text-xs ${plan.popular ? 'text-white/70' : 'text-white/40'}`}>
                  {yearly && price !== 0 ? `Billed annually ($${price * 12})` : ''}
                </p>

                <p className={`mt-6 leading-relaxed ${plan.popular ? 'text-white/85' : 'text-white/50'}`}>{plan.description}</p>

                <ul className={`my-8 flex-grow space-y-3 border-t pt-8 ${plan.popular ? 'border-white/25' : 'border-white/10'}`}>
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? '' : 'text-white/30'}`}>
                      {f.included ? (
                        <FiCheck className={plan.popular ? 'text-white' : 'text-sky'} />
                      ) : (
                        <FiMinus />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                <button className={plan.popular ? 'btn-pill w-full' : 'btn-ghost-pill w-full'}>
                  {plan.buttonText} <FiArrowRight />
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-14 text-center text-sm text-white/40">
          Need a custom solution?{' '}
          <a href="mailto:support@helpbot.com" className="text-soft underline decoration-white/30 underline-offset-4 hover:decoration-white">
            Talk to our team
          </a>
        </p>
      </div>
    </section>
  );
}
