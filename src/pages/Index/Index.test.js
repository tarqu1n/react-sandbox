import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import $ from 'jquery';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Index />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// it('produces a list of links for pages', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<Index />, div);
//
// 	console.log($(div).find('ul').children());
// 	expect($(div).find('ul').children()).toBeGreaterThan(0);
// })
