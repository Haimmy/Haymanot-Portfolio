import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial color="#915EFF" />
    </mesh>
  );
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      <ambientLight intensity={1} />

      <directionalLight position={[2, 2, 2]} />

      <Box />

      <OrbitControls autoRotate />

    </Canvas>
  );
}