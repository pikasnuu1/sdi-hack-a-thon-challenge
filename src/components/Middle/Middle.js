import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './Middle.module.css'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei';


import Square from '../square/square.js';
import Particles from '../Particles/Particles.js';

const Middle = () => {
  const mountRef = useRef(null);

  return (
    <div className={styles.Middle}>
      <div>
        Middle. This will probably talk about why i'm using react-three-fiber
      </div>

      <div>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Square />
        </Canvas>
      </div>

      <div>
        here's something on the end so you can scroll here too, this rendered AFTER the 'End' funtion. hmmmm idk why, well actually, I thinkI know why. something with useRef
      </div>
    </div>

  )
}

export default Middle;