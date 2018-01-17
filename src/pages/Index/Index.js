import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Index.css';

class ThreeJsBasic extends Component {
	render() {
		return (
			<div className="indexPage">
				<ul>
					<li><Link to="/ThreeJsBasic">ThreeJs basic setup</Link></li>
					<li><Link to="/PixiJsBasic">PixiJs basic setup</Link></li>
				</ul>
			</div>
		);
	}
}

export default ThreeJsBasic;
