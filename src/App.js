import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
	return (
		<div className="App">
			<h1>Lights Out</h1>
			<Board ncols={4} nrows={4} />
		</div>
	);
}

export default App;
