

import React, { useState, useEffect, useRef } from 'react';
import Header from "../components/header/Header"
import { layouts } from './LayoutConfig';
import './Home.scss';

function Home() {
  const [layoutIndex, setLayoutIndex] = useState(Math.floor(Math.random() * layouts.length));
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

  const Layout = layouts[layoutIndex];

  const handleRandomizeClick = () => {
    const newIndex = Math.floor(Math.random() * layouts.length);
    setLayoutIndex(newIndex);

    if (newIndex === layoutIndex) {
      handleRandomizeClick();
    } else {
      setKey(prevKey => prevKey + 1);
    }
  };

  return (
    <div>
    <div className="page-framer" key={key}>
      <Header onRandomizeClick={handleRandomizeClick} />
      <div className="main-content-framer" ref={containerRef} >
        <Layout />
      </div>
    </div>
    </div>
  );
}

export default Home;