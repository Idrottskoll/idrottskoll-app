import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { reduxForm } from 'redux-form';

import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

import ViewContainer from '../ViewContainer';
import ScrollViewContainer from '../ScrollViewContainer';
import DefaultCard from '../Cards/DefaultCard';

class Signup extends React.Component {
    /**
    * @param obj formProps
    * @return
    */
    handleFormSubmit(formProps) {
        // call action creater
        this.props.signupUser(formProps).then(response => {
            if (response.data.token !== undefined) {
                this.props.navigation.goBack(null);
            }
        });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <View style={[MainStyles.FORM_GROUP, MainStyles.ERROR_BOX]}>
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
            fields: { name, email, password, passwordConfirmation }
        } = this.props;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <View style={[{ marginBottom: StyleRules.MARGIN }]}>
                            <Text
                                style={[
                                    {
                                        fontSize: StyleRules.FONT_SIZE_TITLE,
                                        fontWeight: 'bold'
                                    }
                                ]}
                            >
                                Registrera
                            </Text>
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>Namn</Text>
                            <TextInput
                                {...name}
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'name'}
                                autoCapitalize="words"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                            {name.touched &&
                                name.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {name.error}
                                    </Text>
                                )}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>E-post</Text>
                            <TextInput
                                {...email}
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'email'}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                            {email.touched &&
                                email.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {email.error}
                                    </Text>
                                )}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>Lösenord</Text>
                            <TextInput
                                {...password}
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'password'}
                                autoCorrect={false}
                                returnKeyType="next"
                                secureTextEntry={true}
                            />
                            {password.touched &&
                                password.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {password.error}
                                    </Text>
                                )}
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>
                                Upprepa lösenord
                            </Text>
                            <TextInput
                                {...passwordConfirmation}
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'passwordConfirmation'}
                                autoCorrect={false}
                                returnKeyType="go"
                                secureTextEntry={true}
                            />
                            {passwordConfirmation.touched &&
                                passwordConfirmation.error && (
                                    <Text style={MainStyles.ERROR_TEXT}>
                                        {passwordConfirmation.error}
                                    </Text>
                                )}
                        </View>

                        {this.renderAlert()}

                        <View style={MainStyles.FORM_GROUP}>
                            <TouchableOpacity
                                style={MainStyles.BUTTON_SUCCESS}
                                onPress={handleSubmit(
                                    this.handleFormSubmit.bind(this)
                                )}
                            >
                                <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                                    Skapa konto
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
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

    if (!formProps.passwordConfirmation) {
        errors.passwordConfirmation = 'Vänligen bekräfta ditt lösenord';
    }

    if (formProps.password !== formProps.passwordConfirmation) {
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
        fields: ['name', 'email', 'password', 'passwordConfirmation'],
        validate
    },
    mapStateToProps,
    actions
)(Signup);
