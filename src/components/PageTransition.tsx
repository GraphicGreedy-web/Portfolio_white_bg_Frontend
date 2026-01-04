import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`transition-all duration-300 ${
        transitionStage === 'fadeOut'
          ? 'opacity-0 translate-y-4'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {children}
    </div>
  );
}
