'use strict';

import React from 'react';
import { View } from 'react-native';

import MainStyles from '../assets/styles/MainStyles';

export default class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={MainStyles.VIEW_CONTAINER}>{this.props.children}</View>
        );
    }
}
