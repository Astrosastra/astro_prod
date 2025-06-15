import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap, Diamond, Home, AArrowDown as Om, Check, Shield } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    items: string[];
  }>;
}

const FeaturesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Core Analysis",
      subtitle: "Complete Analysis - Vedic Life Insights",
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      features: [
        {
          icon: <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />,
          title: "Astrology Details",
          items: ["Planetary Positions", "Horoscope Charts", "Divisional Charts", "Panchang Details"]
        },
        {
          icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />,
          title: "Dosha Analysis",
          items: ["Kalsarpa Dosha", "Manglik Analysis", "Pitra Dosha"]
        }
      ]
    },
    {
      id: 2,
      title: "Life Path",
      subtitle: "Complete Analysis - Vedic Life Insights",
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      features: [
        {
          icon: <Om className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
          title: "Sadesathi & Dasha",
          items: ["Life Phase Impact", "Vimshottari Dasha", "Remedies"]
        },
        {
          icon: <Diamond className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />,
          title: "Gemstones & Numerology",
          items: ["Life Stone", "Lucky Stone", "Favourable Timings"]
        }
      ]
    },
    {
      id: 3,
      title: "Prosperity",
      subtitle: "Complete Analysis - Vedic Life Insights",
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      features: [
        {
          icon: <Home className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />,
          title: "Vastu & Career",
          items: ["Directions", "Financial Opportunities", "Growth Path"]
        },
        {
          icon: <Om className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
          title: "Vedic Remedies",
          items: ["Mantras & Pujas", "Auspicious Timings", "Spiritual Guidance"]
        }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="mt-8 sm:mt-12 relative">
      <div className="cosmic-card rounded-2xl sm:rounded-3xl aurora-glow overflow-hidden">
        {/* Header - Mobile Responsive */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-cyan-500/90"></div>
          <div className="relative px-4 sm:px-8 py-4 sm:py-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  {slides[currentSlide].icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{slides[currentSlide].subtitle}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-bold text-white">₹399</span>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-300" />
                  <span className="text-xs sm:text-sm text-green-200">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Content - Mobile Responsive */}
        <div className="relative">
          <div className="px-4 sm:px-8 py-6 sm:py-8">
            <div className="text-center mb-6 sm:mb-8">
              <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {slides[currentSlide].title}
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="cosmic-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-lg sm:rounded-xl backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <h5 className="text-base sm:text-lg font-bold text-white">{feature.title}</h5>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 sm:space-x-3 group">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-purple-200 group-hover:text-white transition-colors text-xs sm:text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile Responsive */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-purple-800/50 hover:bg-purple-700/70 rounded-full backdrop-blur-sm border border-purple-500/30 transition-all duration-300 group"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white group-hover:text-cyan-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-purple-800/50 hover:bg-purple-700/70 rounded-full backdrop-blur-sm border border-purple-500/30 transition-all duration-300 group"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white group-hover:text-cyan-300" />
          </button>
        </div>

        {/* Dots Indicator - Mobile Responsive */}
        <div className="flex justify-center space-x-2 sm:space-x-3 pb-4 sm:pb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                  : 'bg-purple-600/50 hover:bg-purple-500/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;