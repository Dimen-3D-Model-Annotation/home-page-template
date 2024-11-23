// components/SceneWithCamera.js
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ParticleSystem from './ParticleSystem';

const SceneWithCamera = () => {
  const cameraRef = useRef();
  const targetPosition = new THREE.Vector3(0, 0, 0); // Target position for the camera to look at

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const camera = cameraRef.current;

    if (camera) {
      // Calculate the new camera position
      const newPosition = new THREE.Vector3(
        Math.sin(elapsedTime * 0.1) * 10,
        5,
        Math.cos(elapsedTime * 0.1) * 10
      );

      // Interpolate the camera position
      camera.position.lerp(newPosition, 0.1);

      // Make the camera look at the target position
      camera.lookAt(targetPosition);
    }
  });

  return (
    <>
      <ParticleSystem />
    </>
  );
};

export default SceneWithCamera;