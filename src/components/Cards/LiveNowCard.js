'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StyleRules from '../../assets/styles/StyleRules';
import MainStyles from '../../assets/styles/MainStyles';

export default class LiveNowCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.CONTAINER]}>
                <Text style={[styles.TITLE, { color: StyleRules.GREEN_COLOR }]}>
                    Live just nu:
                </Text>
                <Text
                    style={[styles.TITLE, { color: StyleRules.TEXT_COLOR }]}
                >{` ${this.props.videoName}!`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CONTAINER: {
        alignItems: 'stretch',
        flexDirection: 'row',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        marginTop: StyleRules.MARGIN + StyleRules.MARGIN,
        margin: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.GREEN_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    },

    TITLE: {
        fontWeight: 'bold',
        fontSize: 18
    }
});