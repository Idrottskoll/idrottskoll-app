import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';

export default class DefaultCard extends React.Component {
    render() {
        return (
            <View style={[styles.card]}>
                <Text style={styles.title}>Hej</Text>
                <Text>
                    Look around you. You'll see two councilmen, a union
                    official, couple off-duty cops and a judge. I wouldn't have
                    a second's hesitation of blowing your head off in front of
                    them. Now, that's power you can't buy. That's the power of
                    fear.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'stretch',
        padding: StyleRules.CARD_PADDING_X,
        backgroundColor: '#ffffff',
        margin: StyleRules.MARGIN,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        borderRadius: 3,
    },
    title: {
        fontSize: 18,
        marginBottom: 18,
    },
});
