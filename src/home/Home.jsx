import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from "../components/header/Header";
import { generateLayoutComponents } from './LayoutConfigRandom';
import './Home.scss';
import { useMediaQuery } from 'react-responsive';
import ScrollIndicator from '../components/scrollIndicator/scrollIndicator';
import Footer from '../components/footer/Footer';

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

  return (
    <div>
      <div className="page-framer" key={layoutComponents}>
        <div className="page-centering">
          {showScrollIndicator && <ScrollIndicator />}
          <Header onRandomizeClick={refreshLayouts} />
          <div className="main-content-framer" ref={containerRef}>
            {layoutComponents.map((LayoutComponent, index) => (
              <LayoutComponent key={index} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
