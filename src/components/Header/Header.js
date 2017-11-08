import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Header extends React.Component {
    handleSignout = () => {
        this.props.signoutUser();
        this.forceUpdate();
    };

    render() {
        return (
            <TouchableOpacity
                style={{ marginRight: StyleRules.MARGIN }}
                onPress={this.props.authenticated ? this.handleSignout : null}
            >
                <Image source={require('../../assets/icons/info.png')} />
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);
