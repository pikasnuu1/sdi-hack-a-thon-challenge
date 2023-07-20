import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three';
//import * as THREE from 'three';



const Square = () => {

  const meshRef = useRef(Mesh);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });


  return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='skyblue' />
      </mesh>
  );
}

export default Square;