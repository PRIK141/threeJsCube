import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#FFAE00" />
      <Label position={[-0.5, -0.5, 1]} width={1} height={1} />
      <Label position={[-0.5, -0.5, -1]} width={0.5} height={0.3} />
       <Label position={[0, 1.1, 0]} rotation={[Math.PI / 2, 0, 0]} width={1.5} height={1}  />
      <Label position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]} width={1} height={2} />  
     
    </mesh>
  );
}

function Label(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh}>
      <planeGeometry args={[props.width, props.height]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <gridHelper
        args={[100, 20, "#4D089A", "#4D089A"]}
        position={[0, 0, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
