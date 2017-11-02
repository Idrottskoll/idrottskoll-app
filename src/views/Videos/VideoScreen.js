'use strict';

import React from 'react';
import { View, Image, Text } from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';

import MainStyles from '../../assets/styles/MainStyles';

export default class VideoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title:
            navigation.state.params.videoStatus === 'live'
                ? `Live Nu på ${navigation.state.params.videoName}`
                : navigation.state.params.videoName
    });

    render() {
        const { params } = this.props.navigation.state;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <View style={[MainStyles.VIDEO_CARD]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../assets/icons/football.png')}
                        />
                    </View>

                    <DefaultCard>
                        <Text>{params.videoName}</Text>
                        <Text>{params.videoDescription}</Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text>Status</Text>
                        <Text>{params.videoStatus}</Text>
                    </DefaultCard>
                    {/* if videoStatus is not avalable will not show order button */}
                    {params.videoStatus !== 'not avalable' ? (
                        <OrderNewVideoCard />
                    ) : (
                        <View />
                    )}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
