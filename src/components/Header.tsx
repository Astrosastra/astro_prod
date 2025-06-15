import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-20">
      <div className="header-blend-container">
        {/* Header Constellation Grid Background */}
        <div className="header-constellation-grid">
          {/* Random Constellation Pattern - Natural Star Distribution */}
          
          {/* Constellation Group 1 - Upper Left */}
          <div className="constellation-star" style={{ left: '8%', top: '15%', animationDelay: '0s' }} />
          <div className="constellation-star bright" style={{ left: '12%', top: '25%', animationDelay: '0.5s' }} />
          <div className="constellation-star" style={{ left: '18%', top: '35%', animationDelay: '1s' }} />
          <div className="constellation-star" style={{ left: '15%', top: '45%', animationDelay: '1.5s' }} />
          <div className="constellation-star bright" style={{ left: '22%', top: '55%', animationDelay: '2s' }} />
          
          {/* Connecting lines for Group 1 */}
          <div className="constellation-line" style={{ 
            left: '8.5%', top: '17%', width: '5%', 
            transform: 'rotate(45deg)', animationDelay: '0.3s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '13%', top: '27%', width: '8%', 
            transform: 'rotate(35deg)', animationDelay: '0.8s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '17%', top: '37%', width: '6%', 
            transform: 'rotate(-25deg)', animationDelay: '1.3s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '16%', top: '47%', width: '9%', 
            transform: 'rotate(55deg)', animationDelay: '1.8s' 
          }} />
          
          {/* Constellation Group 2 - Upper Center */}
          <div className="constellation-star bright" style={{ left: '35%', top: '20%', animationDelay: '0.2s' }} />
          <div className="constellation-star" style={{ left: '42%', top: '12%', animationDelay: '0.7s' }} />
          <div className="constellation-star" style={{ left: '48%', top: '28%', animationDelay: '1.2s' }} />
          <div className="constellation-star bright" style={{ left: '52%', top: '18%', animationDelay: '1.7s' }} />
          <div className="constellation-star" style={{ left: '45%', top: '35%', animationDelay: '2.2s' }} />
          <div className="constellation-star" style={{ left: '38%', top: '40%', animationDelay: '2.7s' }} />
          
          {/* Connecting lines for Group 2 */}
          <div className="constellation-line" style={{ 
            left: '36%', top: '19%', width: '8%', 
            transform: 'rotate(-20deg)', animationDelay: '0.5s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '43%', top: '14%', width: '10%', 
            transform: 'rotate(45deg)', animationDelay: '1s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '49%', top: '26%', width: '7%', 
            transform: 'rotate(-35deg)', animationDelay: '1.5s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '46%', top: '33%', width: '9%', 
            transform: 'rotate(-45deg)', animationDelay: '2s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '39%', top: '38%', width: '8%', 
            transform: 'rotate(15deg)', animationDelay: '2.5s' 
          }} />
          
          {/* Constellation Group 3 - Upper Right */}
          <div className="constellation-star" style={{ left: '68%', top: '10%', animationDelay: '0.4s' }} />
          <div className="constellation-star bright" style={{ left: '75%', top: '22%', animationDelay: '0.9s' }} />
          <div className="constellation-star" style={{ left: '82%', top: '15%', animationDelay: '1.4s' }} />
          <div className="constellation-star" style={{ left: '78%', top: '35%', animationDelay: '1.9s' }} />
          <div className="constellation-star bright" style={{ left: '85%', top: '28%', animationDelay: '2.4s' }} />
          <div className="constellation-star" style={{ left: '90%', top: '40%', animationDelay: '2.9s' }} />
          
          {/* Connecting lines for Group 3 */}
          <div className="constellation-line" style={{ 
            left: '69%', top: '12%', width: '9%', 
            transform: 'rotate(65deg)', animationDelay: '0.7s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '76%', top: '21%', width: '8%', 
            transform: 'rotate(-25deg)', animationDelay: '1.2s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '80%', top: '25%', width: '10%', 
            transform: 'rotate(45deg)', animationDelay: '1.7s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '83%', top: '30%', width: '8%', 
            transform: 'rotate(75deg)', animationDelay: '2.2s' 
          }} />
          
          {/* Constellation Group 4 - Lower Left */}
          <div className="constellation-star bright" style={{ left: '5%', top: '65%', animationDelay: '0.6s' }} />
          <div className="constellation-star" style={{ left: '12%', top: '72%', animationDelay: '1.1s' }} />
          <div className="constellation-star" style={{ left: '20%', top: '68%', animationDelay: '1.6s' }} />
          <div className="constellation-star bright" style={{ left: '25%', top: '78%', animationDelay: '2.1s' }} />
          <div className="constellation-star" style={{ left: '18%', top: '85%', animationDelay: '2.6s' }} />
          
          {/* Connecting lines for Group 4 */}
          <div className="constellation-line" style={{ 
            left: '6%', top: '67%', width: '9%', 
            transform: 'rotate(35deg)', animationDelay: '0.9s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '13%', top: '71%', width: '10%', 
            transform: 'rotate(-15deg)', animationDelay: '1.4s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '21%', top: '70%', width: '8%', 
            transform: 'rotate(65deg)', animationDelay: '1.9s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '23%', top: '80%', width: '9%', 
            transform: 'rotate(-45deg)', animationDelay: '2.4s' 
          }} />
          
          {/* Constellation Group 5 - Lower Center */}
          <div className="constellation-star" style={{ left: '40%', top: '75%', animationDelay: '0.8s' }} />
          <div className="constellation-star bright" style={{ left: '48%', top: '68%', animationDelay: '1.3s' }} />
          <div className="constellation-star" style={{ left: '55%', top: '82%', animationDelay: '1.8s' }} />
          <div className="constellation-star" style={{ left: '50%', top: '88%', animationDelay: '2.3s' }} />
          
          {/* Connecting lines for Group 5 */}
          <div className="constellation-line" style={{ 
            left: '41%', top: '74%', width: '10%', 
            transform: 'rotate(-25deg)', animationDelay: '1.1s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '49%', top: '70%', width: '9%', 
            transform: 'rotate(75deg)', animationDelay: '1.6s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '53%', top: '84%', width: '6%', 
            transform: 'rotate(-55deg)', animationDelay: '2.1s' 
          }} />
          
          {/* Constellation Group 6 - Lower Right */}
          <div className="constellation-star bright" style={{ left: '72%', top: '70%', animationDelay: '1s' }} />
          <div className="constellation-star" style={{ left: '80%', top: '65%', animationDelay: '1.5s' }} />
          <div className="constellation-star" style={{ left: '85%', top: '75%', animationDelay: '2s' }} />
          <div className="constellation-star bright" style={{ left: '88%', top: '85%', animationDelay: '2.5s' }} />
          <div className="constellation-star" style={{ left: '78%', top: '88%', animationDelay: '3s' }} />
          
          {/* Connecting lines for Group 6 */}
          <div className="constellation-line" style={{ 
            left: '73%', top: '69%', width: '9%', 
            transform: 'rotate(-20deg)', animationDelay: '1.3s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '81%', top: '67%', width: '7%', 
            transform: 'rotate(65deg)', animationDelay: '1.8s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '86%', top: '77%', width: '6%', 
            transform: 'rotate(75deg)', animationDelay: '2.3s' 
          }} />
          <div className="constellation-line" style={{ 
            left: '83%', top: '86%', width: '8%', 
            transform: 'rotate(-65deg)', animationDelay: '2.8s' 
          }} />
          
          {/* Additional scattered stars for natural randomness */}
          <div className="constellation-star" style={{ left: '28%', top: '15%', animationDelay: '0.3s' }} />
          <div className="constellation-star" style={{ left: '62%', top: '45%', animationDelay: '0.8s' }} />
          <div className="constellation-star bright" style={{ left: '33%', top: '60%', animationDelay: '1.3s' }} />
          <div className="constellation-star" style={{ left: '65%', top: '55%', animationDelay: '1.8s' }} />
          <div className="constellation-star" style={{ left: '92%', top: '12%', animationDelay: '2.3s' }} />
          <div className="constellation-star bright" style={{ left: '3%', top: '35%', animationDelay: '2.8s' }} />
          <div className="constellation-star" style={{ left: '58%', top: '8%', animationDelay: '3.3s' }} />
          <div className="constellation-star" style={{ left: '95%', top: '60%', animationDelay: '3.8s' }} />
          <div className="constellation-star bright" style={{ left: '8%', top: '92%', animationDelay: '4.3s' }} />
          <div className="constellation-star" style={{ left: '70%', top: '92%', animationDelay: '4.8s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-center">
            {/* Brand Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative group mb-2">
                {/* Main Brand Name - More compact */}
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[0.2em] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 drop-shadow-2xl font-sans">
                    ASTROSASTRA
                  </h1>
                  
                  {/* Primary subtle golden luminance effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] bg-gradient-radial from-amber-400/20 via-yellow-400/12 via-orange-400/8 to-transparent opacity-40 transition-all duration-500 hover:opacity-55 blur-2xl group-hover:blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
                  
                  {/* Secondary subtle golden aura layer */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[200%] bg-gradient-radial from-yellow-400/15 via-amber-400/8 via-orange-300/5 to-transparent opacity-25 transition-all duration-700 hover:opacity-35 blur-3xl animate-pulse rounded-full -z-20" style={{ animationDuration: '8s', animationDelay: '-2s' }}></div>
                  
                  {/* Outer very gentle golden glow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160%] h-[220%] bg-gradient-radial from-amber-300/8 via-yellow-300/4 to-transparent opacity-15 transition-all duration-1000 hover:opacity-25 blur-4xl animate-pulse rounded-full -z-30" style={{ animationDuration: '10s', animationDelay: '-4s' }}></div>
                </div>

                {/* Floating Stars around the brand name - smaller and fewer */}
                <div className="absolute -top-2 -left-3 sm:-top-3 sm:-left-4">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 animate-pulse opacity-75" />
                </div>
                <div className="absolute -top-1 -right-2 sm:-top-2 sm:-right-3">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-bounce opacity-75" />
                </div>
                <div className="absolute -bottom-2 -left-1 sm:-bottom-2 sm:-left-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse opacity-75"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce opacity-75"></div>
                </div>
                <div className="absolute top-1/2 -left-3 sm:-left-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse opacity-75"></div>
                </div>
                <div className="absolute top-1/4 -right-3 sm:-right-4">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 animate-spin opacity-75" style={{ animationDuration: '8s' }} />
                </div>
              </div>

              {/* Tagline - More compact */}
              <div className="relative">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.3em] font-medium text-amber-200/90 uppercase transition-colors duration-300 group-hover:text-amber-100 font-sans">
                  Your Star, Your Story
                </p>
                
                {/* Subtle glow under tagline */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-amber-400/20 blur-lg opacity-50 -z-10"></div>
              </div>

              {/* Decorative elements - smaller */}
              <div className="flex items-center space-x-3 mt-2 opacity-60">
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <Star className="h-2 w-2 text-amber-400 animate-pulse" />
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;