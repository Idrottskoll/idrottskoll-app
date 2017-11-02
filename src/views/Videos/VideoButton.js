'use strict';

import React from 'react';
import { View, Image } from 'react-native';

import MainStyles from '../../assets/styles/MainStyles';

export default class VideoCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={[MainStyles.VIDEO_BUTTON]}>
                    <Image
                        style={MainStyles.VIDEO_CONTAINER}
                        source={require('../../assets/icons/football.png')}
                    />
                </View>
                <View style={[MainStyles.MAIN_CARD]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
