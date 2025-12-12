import React, { useEffect, useState } from 'react';
import { RaindropLeafLogo } from './icons/WeatherIcons';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 gradient-primary flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Rain animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-8 bg-white/20 rounded-full animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="animate-float">
        <RaindropLeafLogo size={120} />
      </div>
      
      <h1 className="mt-8 text-3xl font-bold text-white tracking-tight">
        AquaGuard
      </h1>
      <p className="mt-2 text-white/80 text-sm font-medium">
        Drought Resilience & Rain Prediction
      </p>

      <div className="absolute bottom-16 flex flex-col items-center">
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <p className="mt-4 text-white/60 text-xs">Loading your forecast...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
