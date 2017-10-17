import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';
import Signin from '../../components/auth/Signin';
import Signout from '../../components/auth/Signout';

class Profile extends React.Component {
    renderComponent() {
        if (this.props.authenticated) {
            // if ((this.props.authenticated = true)) {
            return [<Signout key="signout" />];
        } else {
            // render more components in array
            return [<Signin key="signin" />];
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    {this.renderComponent()}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Profile);
