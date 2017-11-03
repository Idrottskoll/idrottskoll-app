'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainStyles from '../assets/styles/MainStyles';
import StyleRules from '../assets/styles/StyleRules';

export default class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                {this.props.backdrop ? (
                    <View
                        style={[
                            styles.VIDEO_BACKDROP,
                            {
                                backgroundColor:
                                    this.props.videoStatus === 'live'
                                        ? StyleRules.GREEN_COLOR
                                        : StyleRules.BLUE_COLOR
                            }
                        ]}
                    />
                ) : (
                    <View />
                )}
                <View style={styles.CONTAINER}>{this.props.children}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CONTAINER: {
        zIndex: 5,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    VIDEO_BACKDROP: {
        height: 235,
        zIndex: -5
    }
});
