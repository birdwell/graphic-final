import React, { Component } from 'react';
import * as THREE from 'three';

import { createParticles, updateParticles } from './particle';

export default
class FirstExample extends Component {
	componentDidMount() {
		const WIDTH = 400;
		const HEIGHT = 400;
		// Create the renderer from THREE library
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(WIDTH, HEIGHT);
		renderer.setClearColor(0x000000, 1);
		document.getElementById('first-example').appendChild(renderer.domElement);

		// Create the scene
		const scene = new THREE.Scene();

		// Create the camera for the scene (Play with these more)
		const camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT);
		camera.position.z = 50;
		scene.add(camera);

		const particleSystem = createParticles();

		// Render the scene
		function render() {
			requestAnimationFrame(render);
			t += 0.03;
			sphere.rotation.y += 0.01;
			// sphere.position.z = -7*Math.sin(t*2);
			updateParticles(particleSystem);
			renderer.render(scene, camera);
		}

		const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
		// !Needs light to work!
		const phongMaterial = new THREE.MeshPhongMaterial({ color: 0x0095dd });
		const sphere = new THREE.Mesh(sphereGeometry, phongMaterial);
		// Create a light (white)
		const light = new THREE.PointLight(0xffffff);

		light.position.set(-10, 15, 50);
		// Add to the scene
		scene.add(light);
		scene.add(sphere);
		scene.add(particleSystem);
		// Manipulation
		sphere.rotation.set(0.4, 0.2, 0);
		let t = 0;

		render();
	}

	render() {
		return (
			<div id="first-example" />
		);
	}
}

