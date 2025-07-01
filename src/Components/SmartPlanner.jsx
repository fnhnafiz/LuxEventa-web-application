import { useEffect, useState } from "react";
import { Calendar, MapPin, Users, CheckCircle } from "lucide-react";

const AnimatedSection = ({ children, delay = 2 }) => {
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

const SmartPlanner = () => {
  const steps = [
    {
      icon: <Calendar className="w-10 h-10 text-white" />,
      title: "Choose Date & Time",
      description:
        "Select the perfect date and time for your event with our smart scheduling system.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-white" />,
      title: "Select Venue",
      description:
        "Browse and book from our curated list of stunning venues that match your style.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Invite Guests",
      description:
        "Effortlessly manage your guest list and send beautiful digital invitations.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "Finalize Details",
      description:
        "Confirm all arrangements and get ready to celebrate your perfect event!",
    },
  ];
  return (
    <section
      id="event-planner"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection delay={0}>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Your Smart Event{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Planner
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            Plan your dream event in a few simple steps with our intuitive
            platform. From concept to celebration, we've got you covered.
          </p>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Animated Progress Line (for desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 z-0">
            <div className="relative h-full bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 w-full transform -translate-x-full animate-[slideIn_3s_ease-in-out_1s_forwards] rounded-full"></div>
            </div>
          </div>

          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={200 + index * 150}>
              <div className="relative group">
                {/* Card */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-4 border border-orange-100 flex flex-col items-center text-center h-full relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {step.icon}
                      </div>

                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-400 to-orange-400 rounded-full"></div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={800}>
          <div className="mt-16">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-lg">
              Start Planning Your Event
            </button>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SmartPlanner;
