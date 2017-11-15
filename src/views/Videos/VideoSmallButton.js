'use strict';

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
                <View>
                    <Image
                        style={styles.IMAGE}
                        source={require('../../assets/icons/rightArrow.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    BUTTON_CONTAINER: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        justifyContent: 'space-between',
        borderRadius: 3,
        marginTop: StyleRules.MARGIN * 2,
        margin: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.GREEN_COLOR,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: 0.1
    },

    BUTTON_TITLE: {
        color: StyleRules.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: StyleRules.FONT_SIZE_TITLE,
        fontFamily: 'Fjalla One'
    },
    IMAGE: {
        width: 26,
        height: 26
    }
});
