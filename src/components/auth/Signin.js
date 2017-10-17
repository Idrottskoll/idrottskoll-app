import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { reduxForm } from 'redux-form';

import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class Signin extends React.Component {
    /**
    * @param string email, string password
    * @return
    */
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
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
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
            <View style={[MainStyles.MAIN_CARD]}>
                <View style={[{ marginBottom: StyleRules.MARGIN }]}>
                    <Text
                        style={[
                            {
                                fontSize: StyleRules.FONT_SIZE_TITLE,
                                fontWeight: 'bold',
                            },
                        ]}
                    >
                        Logga in
                    </Text>
                </View>
                <View>
                    <Text
                        style={
                            !this.props.errorMessage
                                ? MainStyles.INPUT_LABEL
                                : MainStyles.ERROR_TEXT
                        }
                    >
                        E-post
                    </Text>
                    <TextInput
                        style={
                            !this.props.errorMessage
                                ? MainStyles.AUTH_INPUT
                                : MainStyles.AUTH_ERROR_INPUT
                        }
                        name={'email'}
                        {...email}
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Text
                        style={
                            !this.props.errorMessage
                                ? MainStyles.INPUT_LABEL
                                : MainStyles.ERROR_TEXT
                        }
                    >
                        Lösenord
                    </Text>
                    <TextInput
                        style={
                            !this.props.errorMessage
                                ? MainStyles.AUTH_INPUT
                                : MainStyles.AUTH_ERROR_INPUT
                        }
                        name={'password'}
                        returnKeyLabel="send"
                        {...password}
                    />
                </View>

                {this.renderAlert()}

                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>Logga in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/**
* @param state
* @return string error
*/
function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm(
    {
        form: 'signin',
        fields: ['email', 'password'],
    },
    mapStateToProps,
    actions,
)(Signin);
