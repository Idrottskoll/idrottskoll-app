import React from 'react';
import { AsyncStorage, View } from 'react-native';
import UserTabs from './auth/components/tabs/UserTabs';
import { connect } from 'react-redux';
import * as actions from './actions';
import AuthenticateUserScreen from './unAuth/views/authenticateUser/AuthenticateUserScreen';

class App extends React.Component {
    checkUserStatus = async () => {
        const fetchToken = await this.props.checkUserStatus().then(token => {
            if (token) {
                return this.props.fetchAuthUserData();
            } else {
                return this.props.signoutUser();
            }
        });
    };

    componentWillMount() {
        this.checkUserStatus();
    }

    render() {
        this.checkUserStatus();
        return !this.props.authenticated ? (
            <AuthenticateUserScreen />
        ) : (
            <UserTabs />
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(App);
