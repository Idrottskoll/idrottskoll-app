'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

export default class VideoSmallButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.BUTTON_CONTAINER]}>
                <Text style={styles.BUTTON_TITLE}>{this.props.title}</Text>
                <Text>></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    BUTTON_CONTAINER: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: StyleRules.BLUE_COLOR,
        margin: StyleRules.MARGIN,
        marginTop: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.GREEN_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    },

    BUTTON_TITLE: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 24
    }
});
