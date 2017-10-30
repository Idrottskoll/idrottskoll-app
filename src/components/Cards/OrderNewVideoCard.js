'use strict';

import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import MainStyles from '../../assets/styles/MainStyles';

export default class OrderNewVideoCard extends React.Component {
    render() {
        return (
            <View style={[MainStyles.ORDER_NEW_VIDEO_CARD]}>
                <View>
                    <Text>Intresserad av en ny video?</Text>
                    <TouchableOpacity
                        style={[MainStyles.ORDER_NEW_VIDEO_BUTTON]}
                    >
                        <Text style={[{ color: '#FFFFFF' }]}>Beställ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
