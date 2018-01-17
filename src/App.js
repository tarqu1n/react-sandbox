import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

//pages
import Index from './pages/Index/Index';
import ThreeJsBasic from './pages/ThreeJsBasic/ThreeJsBasic';
import PixiJsBasic from './pages/PixiJsBasic/PixiJsBasic';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<p>Matt | Tarquin</p>
						<h1>Sandbox | Playground</h1>
					</header>
					<main>
						<Switch>
							<Route path="/ThreeJsBasic" render={ props => <ThreeJsBasic { ...props } /> }/>
							<Route path="/PixiJsBasic" render={ props => <PixiJsBasic { ...props } /> }/>
							<Route path="/" render={ props => <Index { ...props } /> }/>
						</Switch>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
