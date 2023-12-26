import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from "../components/header/Header";
import { generateLayoutComponents } from './LayoutConfigRandom';
import './Home.scss';
import { useMediaQuery } from 'react-responsive';
import ScrollIndicator from '../components/scrollIndicator/scrollIndicator';

const MIN_CARD_WIDTH = 200;

function Home() {
  const containerRef = useRef(null);

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false); // This will cause ScrollIndicator to unmount
    }, 3000); // Set the timeout to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const isIntermediateLayout = useMediaQuery({ maxWidth: 6 * MIN_CARD_WIDTH });
  const isFinalLayout = useMediaQuery({ maxWidth: 4 * MIN_CARD_WIDTH });

  let gridColumns = 6, gridRows = 4;
  if (isFinalLayout) {
      gridColumns = 2;
      gridRows = 12;
  } else if (isIntermediateLayout) {
      gridColumns = 4;
      gridRows = 6;
  }

  const [layoutComponents, setLayoutComponents] = useState(generateLayoutComponents(gridColumns, gridRows));

  const refreshLayouts = useCallback(() => {
    setLayoutComponents(generateLayoutComponents(gridColumns, gridRows));
  }, [gridColumns, gridRows]);

  useEffect(() => {
    refreshLayouts();
  }, [refreshLayouts]);

  useEffect(() => {
    // Add initial animation class to all cards
    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('animate-from-middle');

      // Function to handle animation end
      const handleAnimationEnd = () => {
        card.classList.remove('animate-from-middle');
      };

      card.addEventListener('animationend', handleAnimationEnd);

      return () => {
        cards.forEach(card => {
          card.removeEventListener('animationend', handleAnimationEnd);
        });
      };
    });
  }, [gridColumns, gridRows]);

  return (
    <div>
      <div className="page-framer" key={layoutComponents}>
      {showScrollIndicator && <ScrollIndicator />}
        <Header onRandomizeClick={refreshLayouts} />
        <div className="main-content-framer" ref={containerRef} >
          {layoutComponents.map((LayoutComponent, index) => (
            <LayoutComponent key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
