'use strict';

import React from 'react';
import { Text } from 'react-native';

import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';
import VideoButton from '../Videos/VideoButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <Header />
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text>Hej from Home</Text>
                    </DefaultCard>
                    <VideoButton>
                        <Text>Cool</Text>
                    </VideoButton>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
