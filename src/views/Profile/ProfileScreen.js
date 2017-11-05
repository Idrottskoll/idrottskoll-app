'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import MyProfileCard from '../../components/Cards/MyProfileCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

import Signin from '../../components/auth/Signin';
import Signout from '../../components/auth/Signout';
import Signup from '../../components/auth/Signup';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <MyProfileCard>
                        <TouchableOpacity
                            onPress={() =>
                                navigate('UserSettings', {
                                    user: this.props.data.name
                                })}
                        >
                            <Text>Ändra mina uppgifter</Text>
                        </TouchableOpacity>
                    </MyProfileCard>
                    <Signin />
                    <Signup />
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, data: state.auth.data };
}

export default connect(mapStateToProps)(ProfileScreen);
