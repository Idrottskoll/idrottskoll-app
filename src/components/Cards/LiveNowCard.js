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
                <Text style={MainStyles.MAIN_CARD_TITLE}>Live just nu:</Text>
                <Text style={MainStyles.MAIN_CARD_TITLE}>
                    {` ${this.props.videoName}!`}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CONTAINER: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.GREEN_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    }
});
