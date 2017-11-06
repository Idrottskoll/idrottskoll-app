'use strict';

import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import ForgotPassword from '../../components/auth/ForgotPassword';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.user}`
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    {this.props.authenticated ? (
                        <Text>Settings</Text>
                    ) : (
                        <ForgotPassword />
                    )}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(UserSettings);
