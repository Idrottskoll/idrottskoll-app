import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { reduxForm } from 'redux-form';

import DefaultCard from '../Cards/DefaultCard';
import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class ForgotPasswor extends React.Component {
    /**
    * @param string email, string password
    * @return
    */
    handleFormSubmit({ email }) {
        this.props.changeUserPassword(email).then(response => {
            if (response) {
                Alert.alert(`${response.data.message}:`, email);
                this.props.fields.email.value = null;
            }
        });
    }

    render() {
        const { handleSubmit, fields: { email } } = this.props;
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
                            Glömt Lösenord
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
                            value={null}
                            returnKeyType="next"
                        />
                    </View>

                    {/* {this.renderAlert()} */}

                    <View style={[MainStyles.FLEX_BUTTON_TO_END]}>
                        <TouchableOpacity
                            style={MainStyles.MAIN_BUTTON}
                            onPress={handleSubmit(
                                this.handleFormSubmit.bind(this)
                            )}
                        >
                            <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                Skicka
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
function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
}

export default reduxForm(
    {
        form: 'signin',
        fields: ['email']
    },
    mapStateToProps,
    actions
)(ForgotPasswor);
