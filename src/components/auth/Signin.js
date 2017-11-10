import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { reduxForm } from 'redux-form';

import DefaultCard from '../Cards/DefaultCard';
import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class Signin extends React.Component {
    /**
    * @param string email, string password
    * @return
    */
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password }).then(response => {
            if (response.data.token) {
                this.props.fetchAuthUserData('user');
                // Truncate the password fields
                this.props.fields.password.value = null;
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
        const { handleSubmit, fields: { email, password } } = this.props;
        if (!this.props.authenticated) {
            return (
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
                            Logga in
                        </Text>
                    </View>

                    <View style={MainStyles.FORM_GROUP}>
                        <Text style={MainStyles.INPUT_LABEL}>
                            E-post adress:
                        </Text>
                        <TextInput
                            style={[MainStyles.FORM_INPUT]}
                            name={'email'}
                            {...email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                        />
                    </View>

                    <View style={MainStyles.FORM_GROUP}>
                        <Text style={MainStyles.INPUT_LABEL}>Lösenord:</Text>
                        <TextInput
                            style={[MainStyles.FORM_INPUT]}
                            name={'password'}
                            autoCorrect={false}
                            value={null}
                            returnKeyType="go"
                            secureTextEntry={true}
                            {...password}
                        />
                    </View>

                    {this.renderAlert()}

                    <View
                        style={[
                            MainStyles.FLEX_BUTTON_TO_END,
                            { marginVertical: StyleRules.MARGIN }
                        ]}
                    >
                        {this.props.children}
                    </View>

                    <View style={[MainStyles.FLEX_BUTTON_TO_END]}>
                        <TouchableOpacity
                            style={MainStyles.MAIN_BUTTON}
                            onPress={handleSubmit(
                                this.handleFormSubmit.bind(this)
                            )}
                        >
                            <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                Logga in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </DefaultCard>
            );
        } else {
            return <View />;
        }
    }
}

/**
* @param state
* @return string error
*/
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
};

export default reduxForm(
    {
        form: 'signin',
        fields: ['email', 'password']
    },
    mapStateToProps,
    actions
)(Signin);
