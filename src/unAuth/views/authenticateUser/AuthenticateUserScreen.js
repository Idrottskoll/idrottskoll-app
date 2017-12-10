import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import StyleRules from '../../../assets/styles/StyleRules/';
import Signin from '../../components/authenticateUser/Signin';

class AuthenticateUserScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/icons/logo.png')}
                    />
                    <Text style={styles.title}>Idrottskoll</Text>
                </View>
                <View style={styles.formContainer}>
                    <Signin />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleRules.BLUE_COLOR
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: StyleRules.BUTTON_TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE_TITLE,
        marginVertical: StyleRules.MARGIN,
        textAlign: 'center',
        opacity: 0.8
    },
    formContainer: {}
});

export default connect(mapStateToProps, actions)(AuthenticateUserScreen);
