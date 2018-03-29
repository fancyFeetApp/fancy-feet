import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
            {this.props.data.loggedIn ? <p onClick={this.props.signOut}>Sign Out </p> : <p onClick={this.props.googleAuthentication}> Login </p> }
            </div>
        )
    }
    
 }

 export default Login; 