import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import './App.css';

import ListComponent from "./containers/List/ListComponent"

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Canvas Lists</h1>
				<ListComponent />
			</div>
		);
	}
}

export default hot(module)(App);
