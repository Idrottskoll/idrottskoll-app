import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { reduxForm } from 'redux-form';

import DefaultCard from '../../../universal/components/cards/DefaultCard';
import StyleRules from '../../../assets/styles/StyleRules';
import MainStyles from '../../../assets/styles/MainStyles';
import * as actions from '../../../actions';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticatingUser: false
        };
    }
    /**
     * @param string email, string password
     * @return
     */
    handleFormSubmit = async ({ email, password }) => {
        const startAuthentication = await this.setState({
            authenticatingUser: true
        });

        const authenticateUser = await this.props
            .signinUser({ email, password })
            .then(response => {
                if (response.data.token) {
                    this.props.fetchAuthUserData();
                }
            });
    };

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
        return (
            <View style={MainStyles.AUTH_CONTAINER}>
                <Text style={MainStyles.INPUT_LABEL}>E-post adress:</Text>
                <TextInput
                    style={MainStyles.AUTH_INPUT}
                    name={'email'}
                    {...email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <Text style={MainStyles.INPUT_LABEL}>Lösenord:</Text>
                <TextInput
                    style={MainStyles.AUTH_INPUT}
                    name={'password'}
                    autoCorrect={false}
                    value={null}
                    returnKeyType="go"
                    secureTextEntry={true}
                    {...password}
                    ref={input => (this.passwordInput = input)}
                />
                {this.renderAlert()}
                <TouchableOpacity
                    style={MainStyles.AUTH_BUTTON_CONTAINER}
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text style={MainStyles.AUTH_BUTTON_TEXT}>Logga in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/**
 * @param state
 * @return string error
 */
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error
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
