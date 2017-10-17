import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { reduxForm } from 'redux-form';

import * as actions from '../../actions';
import StyleRules from '../../assets/styles/StyleRules';

class Signin extends React.Component {
    /**
    * @param string email, string password
    * @return
    */
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
            <View>
                <Text>Epost</Text>
                <TextInput
                    name={'email'}
                    {...email}
                    keyboardType="email-address"
                />
                <Text>Lösenord</Text>
                <TextInput
                    name={'password'}
                    returnKeyLabel="send"
                    {...password}
                />
                <TouchableOpacity
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text>Logga in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default reduxForm(
    {
        form: 'signin',
        fields: ['email', 'password'],
    },
    null,
    actions,
)(Signin);
