'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function BeanModel() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const model2Ref = useRef<THREE.Group | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const loader = new GLTFLoader()
    // Load second GLB model
    loader.load(
      '/bean3.glb',
      (gltf) => {
        const model2 = gltf.scene
        model2.scale.set(1, 1, 1)
        model2.position.set(0, 0, 0)
        scene.add(model2)
        model2Ref.current = model2

        // Center the second model
        const box2 = new THREE.Box3().setFromObject(model2)
        const center2 = box2.getCenter(new THREE.Vector3())
        model2.position.sub(center2)
      },
      (progress) => {
        console.log('Loading progress (bean3):', (progress.loaded / progress.total) * 100 + '%')
      },
      (error) => {
        console.error('Error loading model (bean3):', error)
      }
    )

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!cameraRef.current) return;
    
      // Normalize mouse coordinates to -1 to 1 range
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
      // Tilt the second model towards the cursor
      if (model2Ref.current) {
        // Side-to-side tilt
        model2Ref.current.rotation.y = mouseX * 0.5;
        // Up-and-down tilt (inverted)
        model2Ref.current.rotation.x = mouseY * -0.3;
      }
    };

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let time = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      time += 0.01;
      if (model2Ref.current) {
        // Add a slight bobbing animation
        model2Ref.current.position.y = Math.sin(time) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
      }

      // Dispose of resources
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }} />
}

