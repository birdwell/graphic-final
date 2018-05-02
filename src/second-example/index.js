import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	PointLight,
	SphereGeometry,
	Mesh,
	MeshPhongMaterial,
	AxesHelper,
	BoxGeometry,
	MeshBasicMaterial,
	LineSegments,
	BoxHelper
} from 'three';
import OrbitControls from 'three-orbitcontrols';
import React, { Component } from 'react';
import BoxContainer from './components/BoxContainer';
import Marble from './components/Marble';
import { updateParticles, createParticles } from "./particle";
import tweets from "./coffee.json";

const FLOOR = {
	Y: -50
}

export default
class SecondExample extends Component {
	componentDidMount() {
		const WIDTH = 400;
		const HEIGHT = 400;
		const marbles = [];

		const renderer = new WebGLRenderer({ antialias: true });

		renderer.setSize(WIDTH, HEIGHT);
		renderer.setClearColor(0x000000, 1);
		document.getElementById('second-example').appendChild(renderer.domElement);


		const scene = new Scene();
		const camera = new PerspectiveCamera(50, WIDTH / HEIGHT);
		const controls = new OrbitControls(camera);
		const boxContainer = new BoxContainer();

		camera.position.z = 200;
		controls.update();

		scene.add(camera);
		scene.add(boxContainer.object);

		const light = new PointLight(0xffffff);
		light.position.set(-10, 15, 50);
		scene.add(light);

		render();

		tweets.forEach((tweet) => {
			let marble = new Marble(tweet);
			marbles.push(marble);

			scene.add(marble.object);
		})

		// Render the scene
		let t = 100;
		function render() {
			requestAnimationFrame(render);
			// updateParticles(particleSystem);
			renderer.render(scene, camera);

			if (t != FLOOR.Y) {
				marbles.forEach(x => (x.object.position.y = t));
				t -= 1;
			}
		}
	}

	render() {
		return (
			<div id="second-example" />
		);
	}
}