'use strict';

import React from 'react';
import { View, Image } from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';

import MainStyles from '../../assets/styles/MainStyles';

export default class VideoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <View style={[MainStyles.VIDEO_CARD]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../assets/icons/football.png')}
                        />
                    </View>
                    <OrderNewVideoCard />
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
