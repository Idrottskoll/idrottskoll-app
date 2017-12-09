'use strict';

import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import StyleRules from '../../assets/styles/StyleRules';

class ScrollViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh = async () => {
        const refreshingTrue = await this.setState({ refreshing: true });
        const checkToken = await this.props.checkUserStatus().then(token => {
            if (token) {
                this.props.fetchAuthUserData();
            }
        });
        const clubs = await this.props.getActiveClubs();
        const live = await this.props.fetchLiveVideo();

        const refreshingFalse = await this.setState({ refreshing: false });
        return;
    };
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor={StyleRules.GREEN_COLOR}
                        title="Uppdatera"
                        titleColor={StyleRules.GREEN_COLOR}
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
