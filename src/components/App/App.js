import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'


import Start from '../Start/Start.js';
import Middle from '../Middle/Middle.js';
import Scene from '../Scene/Scene.js';

function App() {
  return (

    <div style={{ width: '100vw', height: '100vh'}}>
      <Canvas>
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>

  );
}

export default App;
