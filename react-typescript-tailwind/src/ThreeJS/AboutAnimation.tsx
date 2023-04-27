import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const CoderImage = require("../Assets/fullcode.jpg")

const About = () => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera and position it
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.4, // near plane
      1200 // far plane
    );
    camera.position.z = 5;
// Load the developer's image onto the sphere as a texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(CoderImage);

// Create a new sphere geometry and set its size
const geometry = new THREE.SphereGeometry(3, 32, 32);

// Create a new sphere material and set its properties
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.BackSide // show the texture on the front side as well
});

// Create a new sphere mesh and add it to the scene
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);


    // Create a new renderer and append it to the container
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, 650);
    containerRef.current?.appendChild(renderer.domElement);

    // Animate the sphere rotation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.z -= 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    renderer.setClearColor(0x1D1D1D);

    // Resize the renderer when the window size changes
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef}>
     
    </div>
  );
};

export default About;
