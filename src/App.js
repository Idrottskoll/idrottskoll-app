import React from 'react';
import { AsyncStorage } from 'react-native';
import Tabs from './components/Tabs/Tabs';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
    /**
    * if user is authenticated will fetch user data on signin
    */
    checkUserStatus = () => {
        this.props.checkUserStatus().then(token => {
            if (token) {
                this.props.fetchAuthUserData('user');
            }
        });
        return;
    };

    render() {
        this.checkUserStatus();
        return <Tabs />;
    }
}

function mapStateToProps(state) {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(App);
