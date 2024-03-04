import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particlesOptions } from './particlesConfig';
import './Enter.scss';

function Enter({ onEnter }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div className="home-container">
        <Particles id="tsparticles" options={particlesOptions} />
        <button className="enter-btn" onClick={onEnter}>
          Enter
        </button>
      </div>
    );
  }

  return <></>;
}


export default Enter;