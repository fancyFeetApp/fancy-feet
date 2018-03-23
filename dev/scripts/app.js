import React from 'react';
import ReactDOM from 'react-dom';
import GameInput from './gameInput';

class App extends React.Component {
    render() {
      return (
        <div>
          <GameInput />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
