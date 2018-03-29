import React from 'react';

class GameInput extends React.Component {
	render() {
		return <div className="inputForm">
				<h2>Match  Setup</h2>
				<form className="match-setup" onSubmit={this.props.addGame}>
					<p>Enter Match Name</p>
					<input id='formName' name="name" type="text" placeholder="Match Name" onChange={this.props.handleChange} />
					<p>Enter Match Location</p>
					<input id='formLocation' name="location" type="text" placeholder="Match Location" onChange={this.props.handleChange} />
					<p>Enter Field information</p>
					<input id='formField' name="field" type="text" placeholder="field" onChange={this.props.handleChange} />
					<p>Select a match date</p>
					<input id='formDate' name="date" type="date" onChange={this.props.handleChange} />
					<p>Team Size</p>
					<input id='formMin' name="minPlayer" type="number" min='7' placeholder="Min" onChange={this.props.handleChange} />
					<input id='formMax' name="maxPlayer" type="number" max='30' placeholder="Max" onChange={this.props.handleChange} />
					<button type="submit" > Add Game</button>
				</form>
			</div>;
	}
}

export default GameInput;