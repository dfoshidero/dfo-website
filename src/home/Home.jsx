import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/header/Header";
import { generateLayoutComponents } from './LayoutConfigRandom';
import './Home.scss';

import { useMediaQuery } from 'react-responsive';
const MIN_CARD_WIDTH = 200;

function Home() {
  const containerRef = useRef(null);

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

  useEffect(() => {
    refreshLayouts(gridColumns, gridRows);
  }, [isIntermediateLayout, isFinalLayout,gridRows, gridColumns]);

  const [layoutComponents, setLayoutComponents] = useState(generateLayoutComponents(gridColumns, gridRows));

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
  }, [gridColumns, gridRows]); // Use the "layoutComponents" state as a dependency

  const refreshLayouts = (gridColumns, gridRows) => {
    setLayoutComponents(generateLayoutComponents(gridColumns, gridRows));
  };

  return (
    <div>
      <div className="page-framer" key={layoutComponents}>
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
