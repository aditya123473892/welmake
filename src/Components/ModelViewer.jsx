import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/src/assets/PacketRotation.glb");
  return <primitive object={scene} scale={1} />;
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

export default ModelViewer;
