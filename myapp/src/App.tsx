import './App.css';

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 22.5] }}>
        <Html
          fullscreen
          style={{ userSelect: 'none' }}
          castShadow
          receiveShadow
        >
          <iframe
            width={'100%'}
            height={'100%'}
            src="https://www.tmaxmetaai.com/aboutus"
          ></iframe>
        </Html>
      </Canvas>
    </div>
  );
}

export default App;
