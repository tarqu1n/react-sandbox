import React, { Component } from 'react';
import * as THREE from 'three';

import './ThreeJsBasic.css';

class ThreeJsBasic extends Component {

	componentDidMount() {
		this.initScene();
		this.addCube();
		this.animate();
	}

	initScene() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
		this.camera.position.z = 5;

		this.clock = new THREE.Clock();

		this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
		this.renderer.setSize(500, 500);
	}

	addCube() {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);
	}

	animate(){
		requestAnimationFrame(this.animate.bind(this));

		const delta = this.clock.getDelta();
		this.cube.rotation.x += 1 * delta;
		this.cube.rotation.y += 1 * delta;

		this.renderer.render(this.scene, this.camera);
	}

	render() {

		return (
			<div className="ThreeJsBasicPage">
				<canvas width="500" height="500" style={{width: '500px', height: '500px'}} ref={(canvas) => { this.canvas = canvas; }}></canvas>
			</div>
		);
	}
}

export default ThreeJsBasic;
