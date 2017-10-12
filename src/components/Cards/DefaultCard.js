import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class DefaultCard extends React.Component {
    render() {
        return <View style={[styles.container, styles.card]} />;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingTop: Style.CARD_PADDING_Y,
        padding: Style.CARD_PADDING_X,
        flex: 1,
    },
    card: {
        shadowOpacity: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
});
