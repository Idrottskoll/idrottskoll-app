'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

class VideoScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ViewContainer>
                <Header />
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text>Hello from VideoScreen</Text>
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(VideoScreen);
