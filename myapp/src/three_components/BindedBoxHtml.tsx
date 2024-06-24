import { Box, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { Fragment } from 'react';
import * as THREE from 'three';
import { Object3D } from 'three';

type BindedBoxHtmlProps = {
  boxPosition: [number, number, number];
};
const BindedBoxHtml = ({ boxPosition }: BindedBoxHtmlProps) => {
  const boxRef = React.useRef<Object3D>(null);
  const htmlRef = React.useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (boxRef.current && htmlRef.current) {
      const htmlPosition = boxRef.current.position;

      htmlRef.current.position = htmlPosition;
    }
  });

  return (
    <Fragment>
      <Box
        ref={boxRef}
        args={[5, 5, 5]}
        position={[boxPosition[0], boxPosition[1], boxPosition[2] - 10]}
        geometry={new THREE.BoxGeometry(15, 20, 5)}
      />
      <Html
        ref={htmlRef}
        fullscreen
        style={{
          userSelect: 'none',
          alignContent: 'center',
          justifyContent: 'center',
          border: '1px solid black',
          height: '50vh',
          width: '50vw'
        }}
        position={boxPosition}
        castShadow
        receiveShadow
        occlude={'blending'}
        transform
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.tmaxmetaai.com/aboutus"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-top-navigation allow-popups-to-escape-sandbox"
        ></iframe>
      </Html>
    </Fragment>
  );
};

export default BindedBoxHtml;
