import React from 'react';

class GameInput extends React.Component {
	render() {
		return <div className="inputForm">
				<h2>Match  Setup</h2>
				<form className="match-setup">
					<p>Enter Match Name</p>
					<input name="name" type="text" placeholder="Match Name" />
					<p>Enter Match Location</p>
					<input name="location" type="text" placeholder="Match Location" />
					<p>Enter Field information</p>
					<input name="field" type="text" placeholder="field" />
					<p>Select a match date</p>
					<input name="date" type="date" />
					<p>Team Size</p>
					<input name="minPlayer" type="text" placeholder="Min" />
					<input name="maxPlayer" type="text" placeholder="Max" />

					<button type="submit"> Add Game</button>
				</form>
			</div>;
	}
}

export default GameInput;