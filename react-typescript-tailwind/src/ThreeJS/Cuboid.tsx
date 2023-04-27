import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const CoderImage = require("../Assets/mainCoder.jpg")


const Cuboid = () => {
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

    // Create a new cube geometry and set its size
    const geometry = new THREE.BoxGeometry(3, 3, 3);

    // Load the computer image onto each side of the cube as textures
    const textures = [
      new THREE.TextureLoader().load(CoderImage),
      new THREE.TextureLoader().load(CoderImage),
      new THREE.TextureLoader().load(CoderImage),
      new THREE.TextureLoader().load(CoderImage),
      new THREE.TextureLoader().load(CoderImage),
      new THREE.TextureLoader().load(CoderImage),
      // and so on for other textures
    ];
    
    const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));

    // Create a new cube mesh and add it to the scene
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Create a new renderer and append it to the container
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    // Animate the cube rotation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.z -= 0.01;
      cube.rotation.y += 0.01;


      renderer.render(scene, camera);
    };
    animate();

renderer.setClearColor(0x1D1D1D);

    // Resize the renderer when the window size changes
    const onWindowResize = () => {
      camera.aspect = 300;
      camera.updateProjectionMatrix();
      renderer.setSize(500, 500);
    };
    window.addEventListener('resize', onWindowResize);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div  ref={containerRef} />;
};

export default Cuboid;
