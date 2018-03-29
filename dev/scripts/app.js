import React from 'react';
import ReactDOM from 'react-dom';
import GameInput from './gameInput';
import Login from './login';



class App extends React.Component {

 constructor() {
   super();
   this.state = {
     loggedIn: false
   }
   this.googleAuthentication = this.googleAuthentication.bind(this);
   this.signOut = this.signOut.bind(this);
 }

  /**
   * Signs the user in with google authentication
   */
  googleAuthentication() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    firebase.auth().signInWithPopup(provider)
      .catch(function (error) {
        console.log(error)
      });
  }

  /**
   * Signs the user out
   * @param {e} event - Accepts an event triggered by clicking the signOut button
   */
  signOut(event) {
    event.preventDefault();
    firebase.auth().signOut().then(function (success) {
      console.log('Signed out!')
    }, function (error) {
      console.log(error);
    });
  }




    render() {
      return (
        <div>
          <GameInput />
          <Login data = {this.state}/>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
