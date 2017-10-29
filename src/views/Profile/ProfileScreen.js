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
        this.renderCompomponent = this.renderCompomponent.bind(this);
        this.renderUnAuth = this.renderUnAuth.bind(this);
        this.renderAuth = this.renderAuth.bind(this);
    }

    async show() {
        const showToken = await AsyncStorage.getItem('token');
        alert(showToken);
    }

    renderUnAuth() {
        return (
            <View>
                <Signin />
                <Signup />
            </View>
        );
    }

    renderAuth() {
        return (
            <View>
                <DefaultCard>
                    <MyProfileCard />
                </DefaultCard>

                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={() => this.show()}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                        Show token
                    </Text>
                </TouchableOpacity>

                <Signout />
            </View>
        );
    }

    renderCompomponent() {
        return (
            <View>
                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={() => this.forceUpdate()}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                        Rendera om
                    </Text>
                </TouchableOpacity>
                {this.props.authenticated
                    ? this.renderAuth()
                    : this.renderUnAuth()}
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.authenticated);
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    {this.renderCompomponent()}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(ProfileScreen);
