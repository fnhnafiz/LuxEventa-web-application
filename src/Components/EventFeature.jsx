import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Palette,
  Lightbulb,
  Settings,
  Star,
  ArrowRight,
} from "lucide-react";

const AnimatedSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

function EventFeature() {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-white mb-4" />,
      title: "Catering Excellence",
      description:
        "Gourmet menus and professional service for any dietary need with world-class culinary expertise.",
      rating: 4.9,
      projects: "500+",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: <Palette className="w-12 h-12 text-white mb-4" />,
      title: "Stunning Decor & Design",
      description:
        "Transforming venues with bespoke themes, elegant lighting, and breathtaking visual experiences.",
      rating: 4.8,
      projects: "300+",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white mb-4" />,
      title: "Photography & Videography",
      description:
        "Capturing every precious moment with artistic flair and professional cinematography excellence.",
      rating: 4.9,
      projects: "800+",
      gradient: "from-red-600 to-orange-400",
    },
    {
      icon: <Settings className="w-12 h-12 text-white mb-4" />,
      title: "Sound & Lighting Setup",
      description:
        "State-of-the-art audio-visual solutions for maximum impact and unforgettable experiences.",
      rating: 4.7,
      projects: "400+",
      gradient: "from-orange-600 to-red-500",
    },
  ];
  return (
    <section
      id="featured-services"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <AnimatedSection delay={0}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              Premium Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Featured Services
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            Everything you need for a flawless event, all in one place.
            Professional excellence meets creative innovation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <div className="group relative">
                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-6 border border-orange-100/50 h-full relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Icon with gradient background */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 mx-auto`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold text-gray-700">
                          {service.rating}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-red-600">
                          {service.projects}
                        </span>{" "}
                        projects
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Floating number */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg opacity-80">
                    {index + 1}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 text-sm">
                  Let's create your perfect event together
                </p>
              </div>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Get Quote
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default EventFeature;
