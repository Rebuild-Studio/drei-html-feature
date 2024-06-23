import './App.css';
import * as THREE from 'three';

import { Canvas, useThree } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

const Foo = () => {
  const exporter = new GLTFExporter();
  const options = {
    binary: true
  };
  const state = useThree();
  console.log(state.scene);
  exporter.parse(
    state.scene,
    (result) => {
      console.log(result instanceof ArrayBuffer);
      downloadJSON(result, 'scene.gltf');
    },
    (e) => {
      console.log(e);
    },
    options
  );
  return null;
};

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 22.5] }}>
        <Foo />
        <Box
          args={[1, 1, 1]} // Args for the buffer geometry
          material={new THREE.MeshBasicMaterial({ color: 'red' })} // Material
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
function downloadJSON(
  result: ArrayBuffer | { [key in string]: any },
  fileName: string
) {
  const blob = new Blob([result], { type: 'application/octet-stream' });
  console.log(blob);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
}
