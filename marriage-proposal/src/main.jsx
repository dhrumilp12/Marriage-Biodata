// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* 3D background */}
    <Canvas style={{ position: 'absolute', zIndex: 0 }}>
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
      {/* ... any other 3D elements */}
    </Canvas>

    {/* Foreground content */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <App />
    </div>
  </>
)
