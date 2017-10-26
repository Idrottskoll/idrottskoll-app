import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { reduxForm } from 'redux-form';

import ProfileScreen from '../../views/Profile/ProfileScreen';
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
            if (response.data.token !== undefined) {
                // this.props.navigation.navigate('ProfileScreen');
                this.props.navigation.goBack('ProfileScreen');
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
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <ScrollView>
                    <View style={[MainStyles.MAIN_CARD]}>
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
                            <Text style={MainStyles.INPUT_LABEL}>E-post</Text>
                            <TextInput
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'email'}
                                {...email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </View>

                        <View style={MainStyles.FORM_GROUP}>
                            <Text style={MainStyles.INPUT_LABEL}>Lösenord</Text>
                            <TextInput
                                style={[
                                    MainStyles.AUTH_INPUT,
                                    MainStyles.AUTH_SUCCESS_INPUT
                                ]}
                                name={'password'}
                                autoCorrect={false}
                                returnKeyType="go"
                                secureTextEntry={true}
                                {...password}
                            />
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
                                    Logga in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
        fields: ['email', 'password']
    },
    mapStateToProps,
    actions
)(Signin);
