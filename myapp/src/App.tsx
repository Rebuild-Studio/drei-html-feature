import './App.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BindedBoxHtml from './three_components/BindedBoxHtml';
import { useState } from 'react';

const MAX_DISTANCE = 2000;
function App() {
  const [boxPosition, setBoxPosition] = useState<[number, number, number]>([
    0, 0, 0
  ]);
  const onWheel = (e: React.WheelEvent) => {
    if (boxPosition[2] > 8 && e.deltaY < 0) return;
    if (boxPosition[2] < -8) {
      setBoxPosition((prev) => [prev[0] - e.deltaY / 100, prev[1], prev[2]]);
    } else {
      setBoxPosition((prev) => [prev[0], prev[1], prev[2] - e.deltaY / 100]);
    }
  };
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 22.5] }} onWheel={onWheel}>
        <BindedBoxHtml boxPosition={boxPosition} />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default App;
