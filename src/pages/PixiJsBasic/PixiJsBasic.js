import React, { Component } from 'react';
import './PixiJsBasic.css';

import * as pixi from "pixi.js";

import catImg from './cat.png';

class ThreeJsBasic extends Component {

	componentDidMount() {
		this.initScene();
		this.addCat();
		this.animate();
	}

	initScene() {
		this.renderer = new pixi.WebGLRenderer(500, 500);
		document.body.getElementsByClassName('PixiJsBasicPage')[0].appendChild(this.renderer.view);

		this.stage = new pixi.Stage();

	}

	addCat() {
		const catTexture = pixi.Texture.fromImage(catImg);
		let cat = new pixi.Sprite(catTexture);

		cat.position.x = 250;
		cat.position.y = 250;
		cat.scale.x = 2;
		cat.scale.y = 2;

		this.cat = cat;

		this.stage.addChild(cat);
	}

	animate() {
		this.cat.rotation += 0.01;

		this.renderer.render(this.stage);

		requestAnimationFrame(this.animate.bind(this));
	}

	render() {

		return (
			<div className="PixiJsBasicPage">

			</div>
		);
	}
}

export default ThreeJsBasic;
