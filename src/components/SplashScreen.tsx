
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Start confetti animation after logo appears
    const confettiTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 800);

    // Complete splash screen after all animations
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const confettiItems = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-wanderheart-sage to-wanderheart-ocean flex items-center justify-center z-50 overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiItems.map((i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 opacity-80 animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Logo */}
      <div className="text-center animate-fade-in">
        <div className="relative">
          <Heart className="w-20 h-20 mx-auto mb-6 text-white animate-pulse" />
          <Sparkles className="w-6 h-6 absolute -top-2 -right-2 text-yellow-300 animate-spin" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2 animate-[fade-in_1s_ease-out_0.5s_both]">
          Wanderheart
        </h1>
        
        <p className="text-white/80 text-lg animate-[fade-in_1s_ease-out_1s_both]">
          Your brave journey begins
        </p>

        {/* Encouraging messages */}
        <div className="mt-8 animate-[fade-in_1s_ease-out_1.5s_both]">
          <p className="text-white/90 text-sm">
            ✨ You're braver than you believe
          </p>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[loading_3s_ease-out_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
