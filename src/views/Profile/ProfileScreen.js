'use strict';

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import DefaultCard from '../../components/Cards/DefaultCard';
import MyProfileCard from '../../components/Cards/MyProfileCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

import MainStyles from '../../assets/styles/MainStyles';
import Signin from '../../components/auth/Signin';
import Signout from '../../components/auth/Signout';
import Signup from '../../components/auth/Signup';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    async show() {
        const showToken = await AsyncStorage.getItem('token');
        alert(showToken);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <MyProfileCard />
                    </DefaultCard>
                    <DefaultCard>
                        <TouchableOpacity
                            style={MainStyles.BUTTON_SUCCESS}
                            onPress={() =>
                                this.props.navigation.navigate('Signin', {
                                    navigation: this.props.navigation
                                })}
                        >
                            <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                Logga in
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={MainStyles.BUTTON_SUCCESS}
                            onPress={() =>
                                this.props.navigation.navigate('Signup', {
                                    navigation: this.props.navigation
                                })}
                        >
                            <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                Skapa konto
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={MainStyles.BUTTON_SUCCESS}
                            onPress={() => this.show()}
                        >
                            <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                Show token
                            </Text>
                        </TouchableOpacity>

                        <Signout />
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(ProfileScreen);
