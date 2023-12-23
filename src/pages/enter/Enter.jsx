import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particlesOptions } from './particlesConfig';
import './Enter.scss';

function Enter() {
  let navigate = useNavigate();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsparticles
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  const enterSite = () => {
    alert("\n\nPlease be aware website is still undergoing development! \n Press OK to continue.");
    navigate('/home'); // Navigating to the main content
  };

  if (init) {
    return (
      <div className="home-container">
        <Particles id="tsparticles" options={particlesOptions} />
        <button className="enter-btn" onClick={enterSite}>Enter</button>
      </div>
    );
  }

  return <></>;
}

export default Enter;