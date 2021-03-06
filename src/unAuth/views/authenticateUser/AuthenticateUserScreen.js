import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView,
    Button,
    StatusBar
} from 'react-native';
import StyleRules from '../../../assets/styles/StyleRules/';
import Signin from '../../components/authenticateUser/Signin';
import Signup from '../../components/authenticateUser/Signup';
import ForgotPassword from '../../components/authenticateUser/ForgotPassword';

export default class AuthenticateUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loding: true,
            hasAccount: true,
            forgotPassword: false
        };
    }

    renderForm = () => {
        if (!this.state.loding) {
            return (
                <View style={styles.formContainer}>
                    {this.state.hasAccount ? <Signin /> : <Signup />}
                    <View style={styles.actionsContainer}>
                        <Button
                            title={
                                this.state.hasAccount
                                    ? 'Registrera'
                                    : 'Logga in'
                            }
                            onPress={() =>
                                this.setState({
                                    hasAccount: !this.state.hasAccount
                                })
                            }
                        />
                        {this.state.hasAccount ? <ForgotPassword /> : null}
                    </View>
                </View>
            );
        }
    };

    componentDidMount() {
        this.setState({ loding: false });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/icons/logo.png')}
                    />
                    <Text style={styles.title}>Idrottskoll</Text>
                </View>
                {this.renderForm()}
            </KeyboardAvoidingView>
        );
    }
}

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
        width: 80,
        height: 80
    },
    title: {
        color: StyleRules.BUTTON_TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE_TITLE,
        marginVertical: StyleRules.MARGIN,
        textAlign: 'center',
        opacity: 0.8
    },
    formContainer: {
        marginBottom: StyleRules.MARGIN * 3.5
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
