import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';
import Signin from '../../components/auth/Signin';
import Signout from '../../components/auth/Signout';
import Signup from '../../components/auth/Signup';

class Profile extends React.Component {
    renderComponent() {
        return;
        if (this.props.authenticated) {
            // if ((this.props.authenticated = true)) {
            return [<Signout key="signout" />];
        } else {
            // return [<Signup key="signup" />];
            return [<Signin key="signin" />];
            // return [<Signup key="signup" />, <Signin key="signin" />];
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                {/* <Header /> */}
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    {this.renderComponent()}

                    <View style={MainStyles.MAIN_CARD}>
                        <View style={MainStyles.FORM_GROUP}>
                            <TouchableOpacity
                                style={MainStyles.BUTTON_SUCCESS}
                                onPress={() =>
                                    this.props.navigation.navigate('Signin')}
                            >
                                <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                    Logga in
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <TouchableOpacity
                                style={MainStyles.BUTTON_SUCCESS}
                                onPress={() =>
                                    this.props.navigation.navigate('Signup')}
                            >
                                <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                    Skapa konto
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Profile);
