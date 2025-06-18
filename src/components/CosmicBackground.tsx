import React from 'react';

const CosmicBackground: React.FC = () => {
  // Helper function to calculate line properties between two points
  const getLineProps = (x1: number, y1: number, x2: number, y2: number) => {
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    return { length, angle };
  };

  return (
    <>
      {/* Animated Galaxy */}
      <div className="galaxy-container">
        <div className="galaxy">
          <div className="galaxy-core"></div>
          <div className="galaxy-arm galaxy-arm-1"></div>
          <div className="galaxy-arm galaxy-arm-2"></div>
          <div className="galaxy-arm galaxy-arm-3"></div>
          <div className="galaxy-arm galaxy-arm-4"></div>
        </div>
      </div>

      {/* Constellation Effects */}
      <div className="constellation-background">
        {/* Constellation 1 - Big Dipper inspired */}
        <div className="constellation constellation-1" style={{ top: '10%', left: '15%' }}>
          {/* Stars */}
          <div className="constellation-star bright" style={{ top: '0px', left: '0px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '25px' }}></div>
          <div className="constellation-star" style={{ top: '5px', left: '50px' }}></div>
          <div className="constellation-star bright" style={{ top: '20px', left: '75px' }}></div>
          <div className="constellation-star" style={{ top: '35px', left: '85px' }}></div>
          <div className="constellation-star" style={{ top: '50px', left: '70px' }}></div>
          <div className="constellation-star bright" style={{ top: '45px', left: '45px' }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line" style={{ 
            top: '2px', left: '4px', width: '28px', 
            transform: `rotate(${getLineProps(0, 0, 25, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '29px', width: '28px', 
            transform: `rotate(${getLineProps(25, 15, 50, 5).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '7px', left: '54px', width: '30px', 
            transform: `rotate(${getLineProps(50, 5, 75, 20).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '22px', left: '79px', width: '20px', 
            transform: `rotate(${getLineProps(75, 20, 85, 35).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '37px', left: '75px', width: '25px', 
            transform: `rotate(${getLineProps(85, 35, 70, 50).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '47px', left: '49px', width: '25px', 
            transform: `rotate(${getLineProps(70, 50, 45, 45).angle}deg)` 
          }}></div>
        </div>

        {/* Constellation 2 - Orion inspired */}
        <div className="constellation constellation-2" style={{ top: '60%', right: '10%' }}>
          {/* Stars */}
          <div className="constellation-star bright" style={{ top: '0px', left: '20px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '0px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '40px' }}></div>
          <div className="constellation-star bright" style={{ top: '30px', left: '15px' }}></div>
          <div className="constellation-star bright" style={{ top: '30px', left: '25px' }}></div>
          <div className="constellation-star" style={{ top: '45px', left: '10px' }}></div>
          <div className="constellation-star" style={{ top: '45px', left: '30px' }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line" style={{ 
            top: '2px', left: '20px', width: '25px', 
            transform: `rotate(${getLineProps(20, 0, 0, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '2px', left: '24px', width: '25px', 
            transform: `rotate(${getLineProps(20, 0, 40, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '4px', width: '15px', 
            transform: `rotate(${getLineProps(0, 15, 15, 30).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '29px', width: '15px', 
            transform: `rotate(${getLineProps(40, 15, 25, 30).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '32px', left: '19px', width: '10px', 
            transform: `rotate(0deg)` 
          }}></div>
        </div>

        {/* Constellation 3 - Cassiopeia inspired */}
        <div className="constellation constellation-3" style={{ top: '25%', left: '70%' }}>
          {/* Stars */}
          <div className="constellation-star" style={{ top: '0px', left: '0px' }}></div>
          <div className="constellation-star bright" style={{ top: '10px', left: '20px' }}></div>
          <div className="constellation-star" style={{ top: '5px', left: '40px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '60px' }}></div>
          <div className="constellation-star bright" style={{ top: '8px', left: '80px' }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line" style={{ 
            top: '2px', left: '4px', width: '22px', 
            transform: `rotate(${getLineProps(0, 0, 20, 10).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '12px', left: '24px', width: '22px', 
            transform: `rotate(${getLineProps(20, 10, 40, 5).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '7px', left: '44px', width: '22px', 
            transform: `rotate(${getLineProps(40, 5, 60, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '11px', left: '64px', width: '22px', 
            transform: `rotate(${getLineProps(60, 15, 80, 8).angle}deg)` 
          }}></div>
        </div>

        {/* Constellation 4 - Leo inspired */}
        <div className="constellation constellation-4" style={{ top: '45%', left: '5%' }}>
          {/* Stars */}
          <div className="constellation-star bright" style={{ top: '0px', left: '30px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '15px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '45px' }}></div>
          <div className="constellation-star bright" style={{ top: '30px', left: '0px' }}></div>
          <div className="constellation-star" style={{ top: '30px', left: '30px' }}></div>
          <div className="constellation-star" style={{ top: '45px', left: '20px' }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line" style={{ 
            top: '2px', left: '26px', width: '20px', 
            transform: `rotate(${getLineProps(30, 0, 15, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '2px', left: '34px', width: '20px', 
            transform: `rotate(${getLineProps(30, 0, 45, 15).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '11px', width: '20px', 
            transform: `rotate(${getLineProps(15, 15, 0, 30).angle}deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '30px', width: '15px', 
            transform: `rotate(90deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '32px', left: '15px', width: '20px', 
            transform: `rotate(${getLineProps(30, 30, 20, 45).angle}deg)` 
          }}></div>
        </div>

        {/* Constellation 5 - Cygnus inspired */}
        <div className="constellation constellation-5" style={{ top: '75%', left: '60%' }}>
          {/* Stars */}
          <div className="constellation-star" style={{ top: '0px', left: '25px' }}></div>
          <div className="constellation-star bright" style={{ top: '15px', left: '25px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '10px' }}></div>
          <div className="constellation-star" style={{ top: '15px', left: '40px' }}></div>
          <div className="constellation-star bright" style={{ top: '30px', left: '25px' }}></div>
          <div className="constellation-star" style={{ top: '45px', left: '25px' }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line" style={{ 
            top: '2px', left: '27px', width: '15px', 
            transform: `rotate(90deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '14px', width: '15px', 
            transform: `rotate(0deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '29px', width: '15px', 
            transform: `rotate(0deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '17px', left: '27px', width: '15px', 
            transform: `rotate(90deg)` 
          }}></div>
          <div className="constellation-line" style={{ 
            top: '32px', left: '27px', width: '15px', 
            transform: `rotate(90deg)` 
          }}></div>
        </div>
      </div>

      {/* Zodiac Signs Background */}
      <div className="zodiac-background">
        {/* Aries ♈ */}
        <div className="zodiac-sign zodiac-aries" style={{ top: '15%', left: '10%' }}>♈</div>
        
        {/* Taurus ♉ */}
        <div className="zodiac-sign zodiac-taurus" style={{ top: '25%', right: '15%' }}>♉</div>
        
        {/* Gemini ♊ */}
        <div className="zodiac-sign zodiac-gemini" style={{ top: '40%', left: '5%' }}>♊</div>
        
        {/* Cancer ♋ */}
        <div className="zodiac-sign zodiac-cancer" style={{ top: '60%', right: '8%' }}>♋</div>
        
        {/* Leo ♌ */}
        <div className="zodiac-sign zodiac-leo" style={{ top: '75%', left: '12%' }}>♌</div>
        
        {/* Virgo ♍ */}
        <div className="zodiac-sign zodiac-virgo" style={{ top: '20%', left: '85%' }}>♍</div>
        
        {/* Libra ♎ */}
        <div className="zodiac-sign zodiac-libra" style={{ top: '45%', right: '5%' }}>♎</div>
        
        {/* Scorpio ♏ */}
        <div className="zodiac-sign zodiac-scorpio" style={{ top: '65%', left: '85%' }}>♏</div>
        
        {/* Sagittarius ♐ */}
        <div className="zodiac-sign zodiac-sagittarius" style={{ top: '80%', right: '20%' }}>♐</div>
        
        {/* Capricorn ♑ */}
        <div className="zodiac-sign zodiac-capricorn" style={{ top: '10%', left: '50%' }}>♑</div>
        
        {/* Aquarius ♒ */}
        <div className="zodiac-sign zodiac-aquarius" style={{ top: '85%', left: '50%' }}>♒</div>
        
        {/* Pisces ♓ */}
        <div className="zodiac-sign zodiac-pisces" style={{ top: '35%', left: '50%' }}>♓</div>
      </div>

      {/* Starfield */}
      <div className="starfield">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating cosmic particles */}
      <div className="cosmic-particles">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${20 * i + 10}%`,
              animationDelay: `${-2 * i}s`,
              animationDuration: `${6 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Aurora gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
          `
        }}
      />
    </>
  );
};

export default CosmicBackground;