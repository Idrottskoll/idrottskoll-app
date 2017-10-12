import React from 'react';
import { TextInput, View } from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const TYPE_USER_EMAIL = 'TYPE_USER_EMAIL';
const typeUserEmail = text => ({
    type: TYPE_USER_EMAIL,
    text,
});

const LoginFormTextInput = connect(
    state => ({
        value: state.USER_EMAIL,
    }),
    dispatch => ({
        onChangeText: text => {
            dispatch(typeUserEmail(text));
        },
    }),
)(TextInput);

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            USER_EMAIL: null,
            USER_PASSWORD: null,
            pendingLoginRequest: false,
        };

        this.store = createStore((state, action) => {
            console.log(JSON.stringify(action));
            return { ...state, userEmail: action.text };
        }, this.state);
    }
    render() {
        return (
            <Provider store={this.store}>
                <View>
                    <LoginFormTextInput placeholder="email" />
                    <LoginFormTextInput placeholder="password" />
                </View>
            </Provider>
        );
    }
}
