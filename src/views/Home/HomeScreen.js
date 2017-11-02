'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoButton from '../Videos/VideoButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

export default class HomeScreen extends React.Component {
    // Make method to loade screen with props
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    {/* Add a live Cards at top for demmo  */}
                    <TouchableOpacity onPress={() => navigate('VideoScreen')}>
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

                    <TouchableOpacity onPress={() => navigate('VideoScreen')}>
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
