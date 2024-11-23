'use client';

import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Box } from '@react-three/drei';

const Cube = ({ position, color, scale, onPointerOver, onPointerOut, onClick }) => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (mesh.current) {
      // Wave motion
      const waveFrequency = 0.5;
      const waveAmplitude = 2;
      mesh.current.position.y = position[1] + Math.sin(elapsedTime * waveFrequency + position[0]) * waveAmplitude;

      // Rotation
      mesh.current.rotation.x = elapsedTime * 0.2;
      mesh.current.rotation.y = elapsedTime * 0.2;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const ParticleSystem = () => {
  const [hovered, setHovered] = useState(null);
  const [particles, setParticles] = useState(() => {
    const particlesArray = [];
    for (let i = 0; i < 1000; i++) {
      particlesArray.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        color: new THREE.Color(Math.random(), Math.random(), Math.random()), // Vibrant random colors
        scale: Math.random() * 0.5 + 0.1,
      });
    }
    return particlesArray;
  });

  const handlePointerOver = (index) => {
    setHovered(index);
  };

  const handlePointerOut = () => {
    setHovered(null);
  };

  const handleClick = (index) => {
    setParticles((prevParticles) =>
      prevParticles.map((particle, i) =>
        i === index ? { ...particle, scale: particle.scale * 1.5 } : particle
      )
    );
  };

  return (
    <>
      {particles.map((particle, index) => (
        <Cube
          key={index}
          position={particle.position}
          color={hovered === index ? 'hotpink' : particle.color}
          scale={particle.scale}
          onPointerOver={() => handlePointerOver(index)}
          onPointerOut={handlePointerOut}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  );
};

export default ParticleSystem;