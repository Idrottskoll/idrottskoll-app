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

class Signin extends React.Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
            <View>
                <Text>Epost</Text>
                <TextInput {...email} keyboardType="email-address" />
                <Text>Lösenord</Text>
                <TextInput {...password} />
                <TouchableOpacity
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text>Logga in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password'],
})(Signin);
