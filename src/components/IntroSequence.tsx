import { useState, useEffect, useCallback } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isExiting, setIsExiting] = useState(false);

  const words = ['Think.', 'Automate.', 'Scale.'];

  const handleComplete = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      sessionStorage.setItem('scaleX-intro-seen', 'true');
      onComplete();
    }, 400);
  }, [onComplete, isExiting]);

  // Handle skip on interaction
  useEffect(() => {
    const handleSkip = () => handleComplete();
    
    window.addEventListener('click', handleSkip);
    window.addEventListener('scroll', handleSkip);
    window.addEventListener('touchstart', handleSkip);
    window.addEventListener('keydown', handleSkip);

    return () => {
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('scroll', handleSkip);
      window.removeEventListener('touchstart', handleSkip);
      window.removeEventListener('keydown', handleSkip);
    };
  }, [handleComplete]);

  // Word animation sequence
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setCurrentWordIndex(0);
    }, 200);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (currentWordIndex < 0) return;

    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, 800); // 500ms animation + 300ms pause
      return () => clearTimeout(timer);
    } else if (currentWordIndex === words.length - 1) {
      const timer = setTimeout(() => {
        handleComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words.length, handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-400 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Words container */}
      <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-4">
        {words.map((word, index) => (
          <span
            key={word}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-500 ease-out ${
              index < currentWordIndex
                ? 'opacity-20 translate-y-0 text-foreground'
                : index === currentWordIndex
                ? 'opacity-100 translate-y-0 text-primary animate-pulse-glow'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              textShadow: index === currentWordIndex ? '0 0 40px hsl(var(--primary) / 0.5)' : 'none',
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Skip hint */}
      <p className="absolute bottom-8 text-muted-foreground/50 text-sm animate-pulse">
        Click anywhere to skip
      </p>
    </div>
  );
};

export default IntroSequence;
