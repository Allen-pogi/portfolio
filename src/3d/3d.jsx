import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RotatingModel = () => {
  const { scene } = useGLTF("/assets/me.glb", true); // Correct path to .glb

  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the whole model
    }
  });

  if (!scene) {
    return null; // Or a loading spinner here
  }

  return <primitive object={scene} ref={modelRef} />;
};

const ThreeDScene = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <RotatingModel />
    <OrbitControls />
  </Canvas>
);

export default ThreeDScene;
