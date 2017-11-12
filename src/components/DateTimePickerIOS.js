'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import StyleRules from '../assets/styles/StyleRules';
import MainStyles from '../assets/styles/MainStyles';

class DatePickerIOS extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        return <View />;
    }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
    return {
        activeClubs: state.auth.activeClubs,
        activeCourts: state.auth.activeCourts
    };
};

export default connect(mapStateToProps, actions)(DatePickerIOS);
