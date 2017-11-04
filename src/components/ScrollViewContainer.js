'use strict';

import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import StyleRules from '../assets/styles/StyleRules';

export default class ScrollViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.forceUpdate();
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 1000);
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
