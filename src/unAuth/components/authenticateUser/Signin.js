import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native';
import { reduxForm } from 'redux-form';

import DefaultCard from '../../../universal/components/cards/DefaultCard';
import StyleRules from '../../../assets/styles/StyleRules';
import MainStyles from '../../../assets/styles/MainStyles';
import * as actions from '../../../actions';

class Signin extends React.Component {
    /**
     * @param string email, string password
     * @return
     */
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password }).then(response => {
            if (response.data.token) {
                this.props.fetchAuthUserData();
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
        return (
            //         <Text
            //             style={[
            //                 {
            //                     fontSize: StyleRules.FONT_SIZE_TITLE,
            //                     fontWeight: 'bold',
            //                     fontFamily: 'Fjalla One'
            //                 }
            //             ]}
            //         >
            //             Logga in
            //         </Text>
            //     {this.renderAlert()}
            //
            //     <View
            //         style={[
            //             MainStyles.FLEX_BUTTON_TO_END,
            //             { marginVertical: StyleRules.MARGIN }
            //         ]}
            //     >
            //         {this.props.children}
            //     </View>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={MainStyles.INPUT_LABEL}>E-post adress:</Text>
                <TextInput
                    placeholder="exempel@idrottskoll.se"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    style={styles.input}
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
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    placeholder="Lösenord"
                    style={styles.input}
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
                    style={styles.buttonContainer}
                    onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <Text style={styles.buttonText}>Logga in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: StyleRules.MARGIN,
        marginBottom: StyleRules.MARGIN * 5
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginVertical: StyleRules.MARGIN,
        color: StyleRules.BUTTON_TEXT_COLOR,
        paddingHorizontal: StyleRules.MARGIN
    },
    buttonContainer: {
        backgroundColor: StyleRules.BLUE_GRADIENT_COLOR,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: StyleRules.BUTTON_TEXT_COLOR,
        fontWeight: '700',
        fontSize: StyleRules.FONT_SIZE
    }
});

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
