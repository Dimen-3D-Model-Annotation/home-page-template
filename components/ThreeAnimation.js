// components/ThreeAnimation.js
'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SceneWithCamera from './SceneWithCamera';

const ThreeAnimation = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SceneWithCamera />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeAnimation;