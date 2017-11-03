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
        console.log(this.props.backdrop);
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                {this.props.backdrop ? (
                    <View style={[styles.VIDEO_BACKDROP]} />
                ) : (
                    <View />
                )}
                <View
                    style={
                        this.props.backdrop
                            ? styles.VIDEO_BACKDROP_CONTAINER
                            : null
                    }
                >
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    VIDEO_BACKDROP_CONTAINER: {
        zIndex: 5,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    VIDEO_BACKDROP: {
        backgroundColor: StyleRules.BLUE_COLOR,
        height: 235,
        zIndex: -5
    }
});
