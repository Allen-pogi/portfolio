import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="particles-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#090c2a", // Dark background color
            },
          },
          particles: {
            number: {
              value: 50, // Particle count
            },
            size: {
              value: 4, // Particle size
            },
            move: {
              enable: true,
              speed: 1,
            },
            color: {
              value: "#ffffff", // Particle color
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
