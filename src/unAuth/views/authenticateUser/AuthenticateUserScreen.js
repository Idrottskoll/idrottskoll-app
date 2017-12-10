import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import StyleRules from '../../../assets/styles/StyleRules/';
import Signin from '../../components/authenticateUser/Signin';
import Signup from '../../components/authenticateUser/Signup';

export default class AuthenticateUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loding: true,
            signin: true
        };
    }

    renderForm = () => {
        if (!this.state.loding) {
            return (
                <View style={styles.formContainer}>
                    {this.state.signin ? <Signin /> : <Signup />}
                    <View style={styles.actionsContainer}>
                        <Button
                            title={
                                this.state.signin ? 'Registrera' : 'Logga in'
                            }
                            onPress={() => alert('hej')}
                        />

                        <Button
                            style={{ marginTop: StyleRules.MARGIN }}
                            title="Glömt lösenord?"
                            onPress={() => alert('hej')}
                        />
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
