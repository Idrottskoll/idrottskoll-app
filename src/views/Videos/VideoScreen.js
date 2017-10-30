'use strict';

import React from 'react';
import { Text } from 'react-native';

import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';

class VideoScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <Header />
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text>Mina videos</Text>
                        <Text>
                            I think you and your friend have found the last game
                            in town. where it hurts, their wallets. It's bold.
                            You gonna count me in?
                        </Text>
                    </DefaultCard>
                    <OrderNewVideoCard />
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

export default VideoScreen;
