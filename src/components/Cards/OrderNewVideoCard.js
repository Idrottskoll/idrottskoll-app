'use strict';

import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import StyleRules from '../../assets/styles/StyleRules';

export default class OrderNewVideoCard extends React.Component {
    render() {
        return (
            <View style={[styles.ORDER_NEW_VIDEO_CARD]}>
                <View>
                    <Text>Intresserad av en ny video?</Text>
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
        borderWidth: 1,
        borderColor: StyleRules.BLUE_COLOR,
        margin: StyleRules.MARGIN,
        marginTop: StyleRules.MARGIN,
        padding: StyleRules.CARD_PADDING_X,
        shadowColor: StyleRules.BLUE_COLOR,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        shadowOpacity: 0.3
    }
});
