'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoSmallButton from './VideoSmallButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import MainStyles from '../../assets/styles/MainStyles';

class MyVideosScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            Mina videos
                        </Text>
                        <Text>
                            I think you and your friend have found the last game
                            in town. where it hurts, their wallets. It's bold.
                            You gonna count me in?
                        </Text>
                    </DefaultCard>

                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'Landala 3',
                                videoDescription:
                                    'I give a damn because a good',
                                videoStatus: 'not avalable',
                                videoType: 'avalable, live, ',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <VideoSmallButton title="SM i Rugby" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'Landala 3',
                                videoDescription:
                                    'I give a damn because a good',
                                videoStatus: 'not avalable',
                                videoType: 'avalable, live, ',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <VideoSmallButton title="JSM i Tennis" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'VM Finalen 1994',
                                videoDescription:
                                    'I give a damn because a good',
                                videoStatus: 'not avalable',
                                videoType: 'avalable, live, ',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <VideoSmallButton title="VM Finalen 1994" />
                    </TouchableOpacity>

                    <OrderNewVideoCard />
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

export default MyVideosScreen;
