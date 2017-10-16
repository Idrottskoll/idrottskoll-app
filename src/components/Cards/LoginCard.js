import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';

const DefaultCard = props => {
    return (
        <View style={[styles.card]}>
            <TextInput
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="E-post Adress"
                returnKeyType="next"
            />

            <TextInput
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Lösenord"
                returnKeyType="send"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'stretch',
        padding: StyleRules.CARD_PADDING_X,
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        margin: StyleRules.MARGIN,
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        borderRadius: 3,
    },
});

export default DefaultCard;
