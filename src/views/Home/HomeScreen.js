'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoButton from '../Videos/VideoButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
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
                        <VideoButton>
                            <Text>SM i rugby</Text>
                            <Text>
                                Behind you, stands a symbol of oppression.
                                Blackgate Prison, where a thousand men have
                                languished under the name of this man: Harvey
                                Dent.
                            </Text>
                        </VideoButton>
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
                        <VideoButton>
                            <Text>SM i rugby</Text>
                            <Text>
                                Behind you, stands a symbol of oppression.
                                Blackgate Prison, where a thousand men have
                                languished under the name of this man: Harvey
                                Dent.
                            </Text>
                        </VideoButton>
                    </TouchableOpacity>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
