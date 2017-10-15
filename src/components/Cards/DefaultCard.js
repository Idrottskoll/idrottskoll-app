import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';

const DefaultCard = props => {
    if (props.title || props.taglinne) {
        return (
            <View style={[styles.card]}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.taglinne}>{props.taglinne}</Text>
            </View>
        );
    } else {
        return <View />;
    }
};

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
    taglinne: {},
});

export default DefaultCard;
