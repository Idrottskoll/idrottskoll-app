'use strict';

import React from 'react';
import { View } from 'react-native';

import MainStyles from '../../../assets/styles/MainStyles';

export default class DefaultCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[MainStyles.MAIN_CARD]}>{this.props.children}</View>
        );
    }
}
