import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class Sigout extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
    }
    handleSignout() {
        this.props.signoutUser();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handleSignout()}>
                <Text>Logga ut</Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, actions)(Sigout);
