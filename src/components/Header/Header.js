import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity
} from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';
import Dimensions from 'Dimensions';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Header extends React.Component {
    handleSignout = () => {
        this.props.signoutUser();
        this.forceUpdate();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>IDK</Text>
                <Text>Idrottskoll</Text>
                <TouchableOpacity
                    onPress={
                        !this.props.authenticated ? null : this.handleSignout
                    }
                >
                    {!this.props.authenticated ? null : <Text>Logga ut</Text>}
                </TouchableOpacity>
            </View>
        );
    }
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        alignItems: 'flex-end',
        padding: 15,
        // if platform is iOS and device height is iPhone X
        paddingBottom: Platform.OS === 'ios' && deviceHeight === 812 ? 37 : 25,
        height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 87.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        zIndex: 1
    }
});

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);
