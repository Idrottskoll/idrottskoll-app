import React from 'react';
import { AsyncStorage } from 'react-native';
import UserTabs from './auth/components/tabs/UserTabs';
import { connect } from 'react-redux';
import * as actions from './actions';

// TODO: Add animation in and stop it in componentDiddMount()
class App extends React.Component {
    /**
     * if user is authenticated will fetch user data on signin
     */
    checkUserStatus = () => {
        this.props.checkUserStatus().then(token => {
            if (token) {
                return this.props.fetchAuthUserData('user');
            } else {
                return this.props.signoutUser();
            }
        });
    };

    render() {
        // Moving checkUserStatus() to componentWillMoutn will not work...
        this.checkUserStatus();
        return <UserTabs />;
    }
}

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(App);
