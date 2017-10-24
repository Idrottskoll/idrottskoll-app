'use strict';

import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import MainStyles from '../../assets/styles/MainStyles';
import Signin from '../../components/auth/Signin';
import Signout from '../../components/auth/Signout';
import Signup from '../../components/auth/Signup';

class ProfileScreen extends React.Component {
    async show() {
        const showToken = await AsyncStorage.getItem('token');
        alert(showToken);
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.authenticated);
        if (this.props.authenticated) {
            return (
                <View style={MainStyles.VIEW_CONTAINER}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <View style={MainStyles.MAIN_CARD}>
                            <View>
                                <View style={MainStyles.FORM_GROUP}>
                                    <TouchableOpacity
                                        style={MainStyles.BUTTON_SUCCESS}
                                        onPress={() => this.show()}
                                    >
                                        <Text
                                            style={
                                                MainStyles.BUTTON_SUCCESS_TEXT
                                            }
                                        >
                                            Show token
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={MainStyles.FORM_GROUP}>
                                    <Signout />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <View style={MainStyles.VIEW_CONTAINER}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <View style={MainStyles.MAIN_CARD}>
                            <View>
                                <View style={MainStyles.FORM_GROUP}>
                                    <TouchableOpacity
                                        style={MainStyles.BUTTON_SUCCESS}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'Signin'
                                            )}
                                    >
                                        <Text
                                            style={
                                                MainStyles.BUTTON_SUCCESS_TEXT
                                            }
                                        >
                                            Logga in
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={MainStyles.FORM_GROUP}>
                                    <TouchableOpacity
                                        style={MainStyles.BUTTON_SUCCESS}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'Signup'
                                            )}
                                    >
                                        <Text
                                            style={
                                                MainStyles.BUTTON_SUCCESS_TEXT
                                            }
                                        >
                                            Skapa konto
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(ProfileScreen);
