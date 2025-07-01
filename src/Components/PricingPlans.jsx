import React, { useState } from "react";
import { CheckCircle, Star, Zap, Crown, Sparkles } from "lucide-react";

// AnimatedSection component for smooth animations
const AnimatedSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic Package",
      priceMonthly: 99,
      priceAnnual: 999,
      icon: Star,
      features: [
        "Event Consultation (1 hr)",
        "Venue Sourcing",
        "Basic Decor Planning",
        "Guest List Management (up to 50)",
        "Email Support",
      ],
      highlight: false,
      gradient: "from-gray-600 to-gray-700",
      bgGradient: "from-gray-50 to-white",
    },
    {
      name: "Standard Package",
      priceMonthly: 249,
      priceAnnual: 2499,
      icon: Zap,
      features: [
        "Event Consultation (3 hrs)",
        "Premium Venue Sourcing",
        "Full Decor & Theme Design",
        "Guest List Management (up to 200)",
        "On-site Coordination (Half Day)",
        "Priority Email & Phone Support",
      ],
      highlight: true,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      badge: "🔥 Most Popular",
    },
    {
      name: "Premium Package",
      priceMonthly: 499,
      priceAnnual: 4999,
      icon: Crown,
      features: [
        "Unlimited Consultation",
        "Exclusive Venue Access",
        "Bespoke Decor & Production",
        "Unlimited Guest Management",
        "Full On-site Coordination",
        "Dedicated Event Manager",
        "Post-Event Analytics",
      ],
      highlight: false,
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-500/3 to-orange-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <AnimatedSection delay={0}>
          <div className="mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 text-red-600 text-sm font-bold rounded-full mb-6 tracking-wider uppercase">
              💎 Pricing Plans
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our Flexible{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Choose the perfect package that fits your event needs and budget.
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-semibold">
                {" "}
                Start creating magic today!
              </span>
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Toggle */}
        <AnimatedSection delay={200}>
          <div className="relative inline-flex bg-white rounded-2xl p-2 mb-16 shadow-lg border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl"></div>
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                !isAnnual
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                  : "text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                isAnnual
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                  : "text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
            >
              <span>Annually</span>
              <span className="block text-sm font-normal opacity-80">
                Save 20%
              </span>
            </button>

            {/* Savings badge */}
            {isAnnual && (
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                💰 Save 20%
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;

            return (
              <AnimatedSection key={index} delay={400 + index * 150}>
                <div className="relative group">
                  {/* Glow effect */}
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  )}

                  {/* Main card */}
                  <div
                    className={`relative bg-white rounded-3xl shadow-xl border-2 p-8 lg:p-10 transform hover:scale-105 transition-all duration-500 flex flex-col h-full ${
                      plan.highlight
                        ? "border-red-500/30 shadow-red-500/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Popular badge */}
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
                          <Sparkles className="w-4 h-4" />
                          <span>{plan.badge}</span>
                        </div>
                      </div>
                    )}

                    {/* Card content */}
                    <div className="text-center mb-8">
                      {/* Icon */}
                      <div
                        className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-r ${plan.gradient} items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      {/* Plan name */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {plan.name}
                      </h3>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center">
                          <span className="text-2xl text-gray-600 font-semibold">
                            $
                          </span>
                          <span
                            className={`text-6xl lg:text-7xl font-black ${
                              plan.highlight
                                ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                                : "text-gray-900"
                            }`}
                          >
                            {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                          </span>
                        </div>
                        <p className="text-lg text-gray-600 font-medium">
                          per {isAnnual ? "year" : "month"}
                        </p>

                        {isAnnual && (
                          <p className="text-sm text-green-600 font-semibold mt-2">
                            Save ${plan.priceMonthly * 12 - plan.priceAnnual}{" "}
                            annually!
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-grow">
                      <ul className="text-gray-700 text-left space-y-4 mb-8">
                        {plan.features.map((feature, featIndex) => (
                          <li
                            key={featIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex-shrink-0">
                              <CheckCircle
                                className={`w-6 h-6 ${
                                  plan.highlight
                                    ? "text-red-500"
                                    : "text-green-500"
                                } mt-0.5`}
                              />
                            </div>
                            <span className="text-lg leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl ${
                        plan.highlight
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
                    >
                      {plan.highlight ? "🚀 Get Started Now" : "Choose Plan"}
                    </button>

                    {plan.highlight && (
                      <p className="text-sm text-gray-500 text-center mt-3">
                        ✨ Most popular choice • 30-day money back guarantee
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={1000}>
          <div className="mt-16 p-8 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl border border-red-500/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a tailored
              package that perfectly fits your needs.
            </p>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Contact Sales</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingPlans;
