import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CreateNote from './CreateNote';
import Notes from './Notes';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
        <div>
            <AppBar 
            title="leef"  
            iconElementRight={
                <FlatButton
                    href={ this.props.auth ? "/api/logout" : "/auth/google"}
                    label={this.props.auth ? "logout" : "login in"} />
            }
            />
            <CreateNote />
            <Notes />

        </div>
        )
    }
}

function mapStateToProps({ auth }) {
 return { auth };
}

export default connect(mapStateToProps, actions)(App);
