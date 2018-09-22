import React, { Component } from 'react';
import './App.css';

import ListComponent from "./containers/List/ListComponent"

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Canvas List</h1>
				<ListComponent />
			</div>
		);
	}
}

export default App;
