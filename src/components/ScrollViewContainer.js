'use strict';

import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StyleRules from '../assets/styles/StyleRules';

class ScrollViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.props.checkUserStatus().then(token => {
            if (token) {
                this.props.fetchAuthUserData('user');
            }
            return;
        });
        this.setState({ refreshing: false });
        this.forceUpdate();
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor={StyleRules.BLUE_COLOR}
                        title="Uppdaterar"
                        titleColor={StyleRules.BLUE_COLOR}
                    />
                }
            >
                {this.props.children}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(ScrollViewContainer);
