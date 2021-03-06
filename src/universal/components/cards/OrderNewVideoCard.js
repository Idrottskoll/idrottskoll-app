'use strict';

import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import StyleRules from '../../../assets/styles/StyleRules';

export default class OrderNewVideoCard extends React.Component {
    render() {
        return (
            <View style={[styles.ORDER_NEW_VIDEO_CARD]}>
                <View>
                    <Text
                        style={{
                            width: 160,
                            fontSize: StyleRules.FONT_SIZE_MEDIUM
                        }}
                    >
                        {this.props.title}
                    </Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ORDER_NEW_VIDEO_CARD: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 3,
        margin: StyleRules.MARGIN,
        marginTop: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.BLUE_GRADIENT_COLOR,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: 0.1
    },

    TITLE: {
        fontSize: StyleRules.FONT_SIZE_MEDIUM,
        fontFamily: 'Fjalla One'
    }
});
