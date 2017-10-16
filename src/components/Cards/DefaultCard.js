import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';

const DefaultCard = props => {
    if (props.title || props.taglinne) {
        return (
            <View style={[MainStyles.MAIN_CARD]}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.taglinne}>{props.taglinne}</Text>
            </View>
        );
    } else {
        return <View />;
    }
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginBottom: 18,
    },
    taglinne: {},
});

export default DefaultCard;
