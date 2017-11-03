'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoLargeButton from '../Videos/VideoLargeButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import LiveNowCard from '../../components/Cards/LiveNowCard';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'SM final innebany',
                                videoDescription:
                                    'I give a damn because a good',
                                videoStatus: 'live',
                                videoType: 'live, ',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <LiveNowCard videoName="SM final innebany" />
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
                        <VideoLargeButton>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                SM i rugby
                            </Text>
                            <Text>
                                Behind you, stands a symbol of oppression.
                                Blackgate Prison, where a thousand men have
                                languished under the name of this man: Harvey
                                Dent.
                            </Text>
                        </VideoLargeButton>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'Lerum 7',
                                videoDescription:
                                    'I believe kill you simply makes you... stranger.',
                                videoStatus: 'live',
                                videoType: 'avalable, live, not avalable',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <VideoLargeButton>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                SM i rugby
                            </Text>
                            <Text>
                                Behind you, stands a symbol of oppression.
                                Blackgate Prison, where a thousand men have
                                languished under the name of this man: Harvey
                                Dent.
                            </Text>
                        </VideoLargeButton>
                    </TouchableOpacity>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
