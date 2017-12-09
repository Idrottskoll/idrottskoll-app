'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StyleRules from '../../../assets/styles/StyleRules';
import MainStyles from '../../../assets/styles/MainStyles';

export default class NotAuthCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.CONTAINER]}>
                <Text style={MainStyles.MAIN_CARD_TITLE}>Ops!</Text>
                <Text>
                    {`Du måste vara inloggad för att kunna ${
                        this.props.blockedContent
                    }`}
                </Text>
                <View style={[{ marginVertical: StyleRules.MARGIN }]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CONTAINER: {
        alignItems: 'stretch',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.ORANGE_COLOR,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: 0.1
    }
});
