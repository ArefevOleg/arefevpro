import React, { useEffect, useRef } from 'react';
import * as THREE from 'https://cdn.skypack.dev/three@0.134';

const Smoke = (props) => {
  const defaults = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const options = { ...defaults, ...props };
  const clock = useRef(new THREE.Clock());
  const renderer = useRef(new THREE.WebGLRenderer());
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, options.width / options.height, 1, 10000));
  const smokeParticles = useRef([]);

  useEffect(() => {
    camera.current.position.z = 1000;
    scene.current.add(camera.current);

    renderer.current.setSize(options.width, options.height);
    document.body.appendChild(renderer.current.domElement);

    addLights();
    addCamera();
    addParticles();

    const animate = () => {
      const delta = clock.current.getDelta();
      evolveSmoke(delta);
      render();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      document.body.removeChild(renderer.current.domElement);
    };
  }, []);

  const evolveSmoke = (delta) => {
    smokeParticles.current.forEach((particle, index) => {
      particle.rotation.z += delta * 0.2;
      particle.position.y += delta * 0.1;
      particle.position.x += (Math.random() - 0.5) * delta * 2;
    });
  };

  const addLights = () => {
    const light = new THREE.DirectionalLight(0xffffff, 0.75);
    light.position.set(-1, 0, 1);
    scene.current.add(light);
  };

  const addCamera = () => {
    camera.current.aspect = options.width / options.height;
    camera.current.updateProjectionMatrix();
    scene.current.add(camera.current);
  };

  const addParticles = () => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('https://rawgit.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/clouds.png', (texture) => {
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: texture,
        transparent: true,
      });
      smokeMaterial.map.minFilter = THREE.LinearFilter;
      const smokeGeometry = new THREE.PlaneBufferGeometry(300, 300);

      for (let i = 0; i < 50; i++) {
        const smokeMesh = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smokeMesh.position.set(Math.random() * 500 - 250, options.height * -0.3 - 150, Math.random() * 1000 - 100);
        smokeMesh.rotation.z = Math.random() * 360;
        smokeParticles.current.push(smokeMesh);
        scene.current.add(smokeMesh);
      }
    });
  };

  const render = () => {
    renderer.current.render(scene.current, camera.current);
  };

  const onResize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    camera.current.aspect = windowWidth / windowHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(windowWidth, windowHeight);
  };

  return null;
};

export default Smoke;
