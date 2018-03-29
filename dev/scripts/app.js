import React from 'react';
import ReactDOM from 'react-dom';
import GameInput from './gameInput';
import Login from './login';

var config = {
  apiKey: "AIzaSyB0oycxIH4l6RgeWVwSdhIzrqVrnw_HVAs",
  authDomain: "fancy-feet.firebaseapp.com",
  databaseURL: "https://fancy-feet.firebaseio.com",
  projectId: "fancy-feet",
  storageBucket: "fancy-feet.appspot.com",
  messagingSenderId: "620852386300"
};
firebase.initializeApp(config);


class App extends React.Component {

 constructor() {
   super();
   this.state = {
     loggedIn: false,
     formName: '',
     formLocation:'',
     formField:'',
     formDate:'',
     formMin:'',
     formMax:''
   }
   this.googleAuthentication = this.googleAuthentication.bind(this);
   this.signOut = this.signOut.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.addGame = this.addGame.bind(this);
 }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        })
      }
      else {
        this.setState({
          loggedIn: false
        })
      }
    })
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

handleChange (event){
  // console.log(event.target.id);
  this.setState({
    [event.target.id]: event.target.value
  });
}

addGame (event) {
  event.preventDefault();
  // console.log('gamee added');
  const newGame = {
    name: this.state.formName,
    location: this.state.formLocation,
    date: this.state.formDate,
    field: this.state.formField,
    min: this.state.formMin,
    max: this.state.formMax
  }
  const userID = firebase.auth().currentUser.uid;
  const dbref = firebase.database().ref(`users/${userID}/games`);
  dbref.push(newGame);
}


    render() {
      return (
        <div>
          <GameInput  handleChange = {this.handleChange} addGame={this.addGame} />
          <Login data = {this.state} googleAuthentication = {this.googleAuthentication} signOut = {this.signOut} />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
