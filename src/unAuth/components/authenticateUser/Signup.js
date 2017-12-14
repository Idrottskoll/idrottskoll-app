import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { reduxForm } from 'redux-form';

import StyleRules from '../../../assets/styles/StyleRules';
import MainStyles from '../../../assets/styles/MainStyles';
import * as actions from '../../../actions';

import ViewContainer from '../../../universal/components/ViewContainer';
import ScrollViewContainer from '../../../universal/components/ScrollViewContainer';
import DefaultCard from '../../../universal/components/cards/DefaultCard';

class Signup extends React.Component {
    /**
     * @param obj formProps
     * @return
     */
    handleFormSubmit(formProps) {
        // call action creater
        this.props.signupUser(formProps).then(response => {
            if (response.data.token) {
                this.props.fetchAuthUserData();
                // Truncate the fields
                this.props.fields.name.value = null;
                this.props.fields.email.value = null;
                this.props.fields.password.value = null;
                this.props.fields.passwordConfirmation.value = null;
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
            <View style={MainStyles.AUTH_CONTAINER}>
                <Text style={MainStyles.INPUT_LABEL}>För- och efternamn:</Text>
                <TextInput
                    {...name}
                    style={MainStyles.AUTH_INPUT}
                    name={'name'}
                    autoCapitalize="words"
                    autoCorrect={false}
                    returnKeyType="next"
                    value={null}
                />
                {name.touched &&
                    name.error && (
                        <Text style={MainStyles.ERROR_TEXT}>{name.error}</Text>
                    )}

                <Text style={MainStyles.INPUT_LABEL}>E-post adress:</Text>
                <TextInput
                    {...email}
                    style={MainStyles.AUTH_INPUT}
                    name={'email'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    value={null}
                />
                {email.touched &&
                    email.error && (
                        <Text style={MainStyles.ERROR_TEXT}>{email.error}</Text>
                    )}

                <Text style={MainStyles.INPUT_LABEL}>Lösenord:</Text>
                <TextInput
                    {...password}
                    style={MainStyles.AUTH_INPUT}
                    name={'password'}
                    autoCorrect={false}
                    returnKeyType="next"
                    secureTextEntry={true}
                    value={null}
                />
                {password.touched &&
                    password.error && (
                        <Text style={MainStyles.ERROR_TEXT}>
                            {password.error}
                        </Text>
                    )}

                <Text style={MainStyles.INPUT_LABEL}>Upprepa lösenord:</Text>
                <TextInput
                    {...passwordConfirmation}
                    style={MainStyles.AUTH_INPUT}
                    name={'passwordConfirmation'}
                    autoCorrect={false}
                    returnKeyType="go"
                    secureTextEntry={true}
                    value={null}
                />
                {passwordConfirmation.touched &&
                    passwordConfirmation.error && (
                        <Text style={MainStyles.ERROR_TEXT}>
                            {passwordConfirmation.error}
                        </Text>
                    )}

                {this.renderAlert()}

                <TouchableOpacity
                    style={MainStyles.AUTH_BUTTON_CONTAINER}
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text style={MainStyles.MAIN_BUTTON_TEXT}>Registrera</Text>
                </TouchableOpacity>
            </View>
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
        errors.name = 'Vänligen ange ditt namn. För- och efternamn.';
    }

    if (!formProps.email) {
        errors.email = 'Vänligen ange din e-post adress.';
    }

    if (!formProps.password) {
        errors.password = 'Vänligen ange ditt lösenord.';
    }

    if (!formProps.passwordConfirmation) {
        errors.passwordConfirmation = 'Vänligen bekräfta ditt lösenord.';
    }

    if (formProps.password !== formProps.passwordConfirmation) {
        errors.password = 'Lösenord stämmer inte överens...';
    }

    return errors;
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
};

export default reduxForm(
    {
        form: 'signup',
        fields: ['name', 'email', 'password', 'passwordConfirmation'],
        validate
    },
    mapStateToProps,
    actions
)(Signup);
