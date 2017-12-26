import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Modal,
    Button
} from 'react-native';
import { reduxForm } from 'redux-form';

import StyleRules from '../../../assets/styles/StyleRules';
import MainStyles from '../../../assets/styles/MainStyles';
import * as actions from '../../../actions';

class ForgotPasswor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    /**
     * @param string email, string password
     * @return
     */
    handleFormSubmit({ email }) {
        this.props.changeUserPassword(email).then(response => {
            if (response) {
                this.props.values.email = null;
                Alert.alert(`${response.data.message}:`, email);
                this.setModalVisible(!this.state.modalVisible);
            } else {
                Alert.alert('Oj då...', 'Något gick fel, försök igen!');
            }
        });
    }

    render() {
        const { handleSubmit, fields: { email } } = this.props;
        return (
            <View>
                <Modal
                    animationType="slide"
                    presentationStyle="formSheet"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: StyleRules.BLUE_COLOR
                        }}
                    >
                        <View style={MainStyles.AUTH_CONTAINER}>
                            <View
                                style={{
                                    marginVertical: StyleRules.MARGIN * 3
                                }}
                            >
                                <Button
                                    title="Stäng"
                                    onPress={() =>
                                        this.setModalVisible(
                                            !this.state.modalVisible
                                        )
                                    }
                                />
                            </View>

                            <Text style={MainStyles.INPUT_LABEL}>
                                E-post adress:
                            </Text>
                            <TextInput
                                style={MainStyles.AUTH_INPUT}
                                name={'email'}
                                {...email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={null}
                                returnKeyType="next"
                            />

                            <TouchableOpacity
                                style={MainStyles.AUTH_BUTTON_CONTAINER}
                                onPress={handleSubmit(
                                    this.handleFormSubmit.bind(this)
                                )}
                            >
                                <Text style={MainStyles.AUTH_BUTTON_TEXT}>
                                    Skicka
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Button
                    title="Glömt lösenord"
                    onPress={() =>
                        this.setModalVisible(!this.state.modalVisible)
                    }
                />
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
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
};

export default reduxForm(
    {
        form: 'signin',
        fields: ['email']
    },
    mapStateToProps,
    actions
)(ForgotPasswor);
