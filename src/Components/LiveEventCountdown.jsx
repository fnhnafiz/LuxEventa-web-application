import { useCallback, useEffect, useState } from "react";
import { Calendar, Clock, Zap, Star } from "lucide-react";

// AnimatedSection component for smooth animations
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
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const LiveEventCountdown = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime(); // Example: End of year 2025

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { key: "days", label: "Days", icon: Calendar },
    { key: "hours", label: "Hours", icon: Clock },
    { key: "minutes", label: "Minutes", icon: Zap },
    { key: "seconds", label: "Seconds", icon: Star },
  ];

  return (
    <section
      id="countdown"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <AnimatedSection delay={0}>
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-400 text-sm font-bold rounded-full mb-6 tracking-wider uppercase backdrop-blur-sm">
              🔥 Live Event Countdown
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Next Big Event
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mt-2">
                Starts In...
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-3xl mx-auto font-light">
            Get ready for an extraordinary experience that will blow your mind!
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-semibold">
              {" "}
              Don't miss out!
            </span>
          </p>
        </AnimatedSection>

        {/* Countdown Section */}
        {timeLeft.expired ? (
          <AnimatedSection delay={400}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-orange-500 p-12 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Zap className="w-12 h-12 text-white animate-pulse" />
                  <Star className="w-8 h-8 text-white animate-spin" />
                </div>
                <p className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
                  🎉 EVENT LIVE! 🎉
                </p>
                <p className="text-2xl md:text-3xl text-white/90 font-semibold">
                  Join the excitement now!
                </p>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {timeUnits.map(({ key, label, icon: Icon }, index) => (
              <AnimatedSection key={key} delay={400 + index * 150}>
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

                  {/* Main card */}
                  <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-500 hover:border-red-500/50">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="mb-4">
                      <p className="text-6xl md:text-7xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2 countdown-glow leading-none">
                        {String(timeLeft[key]).padStart(2, "0")}
                      </p>

                      {/* Animated underline */}
                      <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto w-16 group-hover:w-24 transition-all duration-300"></div>
                    </div>

                    {/* Label */}
                    <p className="text-lg md:text-xl uppercase text-gray-300 font-bold tracking-widest">
                      {label}
                    </p>

                    {/* Pulse dot indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {!timeLeft.expired && (
          <AnimatedSection delay={1000}>
            <div className="mt-16">
              <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <span>Get Notified</span>
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
              </button>
              <p className="text-gray-400 text-sm mt-4">
                Be the first to know when the event goes live!
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes countdown-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(239, 68, 68, 0.6))
              drop-shadow(0 0 24px rgba(249, 115, 22, 0.4));
          }
        }

        @keyframes pulse-border {
          0%,
          100% {
            border-color: rgba(239, 68, 68, 0.3);
          }
          50% {
            border-color: rgba(239, 68, 68, 0.6);
          }
        }

        .countdown-glow {
          animation: countdown-glow 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .countdown-glow {
            animation: none;
            filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.4));
          }
        }
      `}</style>
    </section>
  );
};

export default LiveEventCountdown;
