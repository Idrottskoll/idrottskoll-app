import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { reduxForm } from 'redux-form';

import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class Signup extends React.Component {
    /**
    * @param obj formProps
    * @return
    */
    handleFormSubmit(formProps) {
        // call action creater
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <View>
                    <Text style={MainStyles.ERROR_TEXT}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            );
        }
    }

    render() {
        const {
            handleSubmit,
            fields: { name, email, password, passwordConfirm },
        } = this.props;
        return (
            <KeyboardAvoidingView
                style={[MainStyles.MAIN_CARD]}
                behavior="padding"
            >
                <View style={[{ marginBottom: StyleRules.MARGIN }]}>
                    <Text
                        style={[
                            {
                                fontSize: StyleRules.FONT_SIZE_TITLE,
                                fontWeight: 'bold',
                            },
                        ]}
                    >
                        Registrera
                    </Text>
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Namn</Text>
                    <TextInput
                        {...name}
                        style={MainStyles.AUTH_INPUT}
                        name={'name'}
                    />
                    {name.touched &&
                        name.error && (
                            <Text style={MainStyles.ERROR_TEXT}>
                                {name.error}
                            </Text>
                        )}
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>E-post</Text>
                    <TextInput
                        {...email}
                        style={MainStyles.AUTH_INPUT}
                        name={'email'}
                        keyboardType="email-address"
                    />
                    {email.touched &&
                        email.error && (
                            <Text style={MainStyles.ERROR_TEXT}>
                                {email.error}
                            </Text>
                        )}
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Lösenord</Text>
                    <TextInput
                        {...password}
                        style={MainStyles.AUTH_INPUT}
                        name={'password'}
                        returnKeyLabel="send"
                    />
                    {password.touched &&
                        password.error && (
                            <Text style={MainStyles.ERROR_TEXT}>
                                {password.error}
                            </Text>
                        )}
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Upprepa lösenord</Text>
                    <TextInput
                        {...passwordConfirm}
                        style={MainStyles.AUTH_INPUT}
                        name={'passwordConfirm'}
                        returnKeyLabel="send"
                    />
                    {passwordConfirm.touched &&
                        passwordConfirm.error && (
                            <Text style={MainStyles.ERROR_TEXT}>
                                {passwordConfirm.error}
                            </Text>
                        )}
                </View>

                {this.renderAlert()}

                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                        Skapa konto
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

/**
* @param obj fromProps
* @return bool validSignUp
*/
function validate(formProps) {
    const errors = {};

    if (!formProps.name) {
        errors.name = 'Vänligen ange ditt namn';
    }

    if (!formProps.email) {
        errors.email = 'Vänligen ange din e-post adress';
    }

    if (!formProps.password) {
        errors.password = 'Vänligen ange ditt lösenord';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Vänligen bekräfta ditt lösenord';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Lösenord stämmer inte överens...';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm(
    {
        form: 'signup',
        fields: ['name', 'email', 'password', 'passwordConfirm'],
        validate,
    },
    mapStateToProps,
    actions,
)(Signup);
