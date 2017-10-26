import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import MainStyles from '../../assets/styles/MainStyles';
import * as actions from '../../actions';

class Sigout extends React.Component {
    handleSignout() {
        this.props.signoutUser();
    }

    render() {
        return (
            <View style={MainStyles.FORM_GROUP}>
                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={this.handleSignout()}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>Logga ut</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, actions)(Sigout);
