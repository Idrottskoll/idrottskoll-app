import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MainStyles from '../../assets/styles/MainStyles';

const LoginCard = props => {
    return (
        <View style={[MainStyles.MAIN_CARD]}>
            <TextInput
                style={[styles.input, styles.email]}
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="E-post Adress"
                returnKeyType="next"
            />

            <TextInput
                style={[styles.input, styles.password]}
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Lösenord"
                returnKeyType="send"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {},

    email: {},

    password: {},
});

export default LoginCard;
