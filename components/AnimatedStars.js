// components/AnimatedStars.js
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedStars = () => {
  const pointsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsedTime * 0.1; // Rotate stars over time
    }
  });

  const stars = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    stars[i * 3] = (Math.random() - 0.5) * 10;
    stars[i * 3 + 1] = (Math.random() - 0.5) * 10;
    stars[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={stars}
          itemSize={3}
          count={1000}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.1} />
    </points>
  );
};

export default AnimatedStars;
