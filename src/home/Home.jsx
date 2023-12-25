import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/header/Header";
import { generateLayoutComponents } from './LayoutConfigRandom';
import './Home.scss';

function Home() {
  const containerRef = useRef(null);

  const [layoutComponents, setLayoutComponents] = useState(generateLayoutComponents());

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
  }, []); // Use the "layoutComponents" state as a dependency

  const refreshLayouts = () => {
    setLayoutComponents(generateLayoutComponents());
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
