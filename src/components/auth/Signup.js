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

class Signup extends React.Component {
    render() {
        const {
            handelSubmit,
            fields: { name, email, password, passwordConfirm },
        } = this.props;
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
                        Registrera
                    </Text>
                </View>
                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Namn</Text>
                    <TextInput
                        {...name}
                        style={MainStyles.AUTH_INPUT}
                        name={'name'}
                    />
                </View>
                <View>
                    <Text style={MainStyles.INPUT_LABEL}>E-post</Text>
                    <TextInput
                        {...email}
                        style={MainStyles.AUTH_INPUT}
                        name={'email'}
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Lösenord</Text>
                    <TextInput
                        {...password}
                        style={MainStyles.AUTH_INPUT}
                        name={'password'}
                        returnKeyLabel="send"
                    />
                </View>

                <View>
                    <Text style={MainStyles.INPUT_LABEL}>Upprepa lösenord</Text>
                    <TextInput
                        {...passwordConfirm}
                        style={MainStyles.AUTH_INPUT}
                        name={'passwordConfirm'}
                        returnKeyLabel="send"
                    />
                </View>

                <TouchableOpacity style={MainStyles.BUTTON_SUCCESS}>
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                        Skapa Konto
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['name', 'email', 'password', 'passwordConfirm'],
})(Signup);
