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
    render() {
        return (
            <View>
                <Text>Epost</Text>
                <TextInput />
                <Text>Lösenord</Text>
                <TextInput />
                <TouchableOpacity>
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
