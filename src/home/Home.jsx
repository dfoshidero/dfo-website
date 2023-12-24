import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/header/Header"
import layouts from './LayoutConfigRandom';
import './Home.scss';

function Home() {
  const containerRef = useRef(null);
  const [key, setKey] = useState(0); // Add a key state

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
  }, [key]); // Use the "key" state as a dependency

  return (
    <div>
      <div className="page-framer" key={key}>
        <Header />
        <div className="main-content-framer" ref={containerRef} >
          {layouts.map((LayoutComponent, index) => (
            <LayoutComponent key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
