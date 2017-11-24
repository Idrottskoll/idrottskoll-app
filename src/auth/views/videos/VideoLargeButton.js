'use strict';

import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import MainStyles from '../../../assets/styles/MainStyles';

export default class VideoLargeButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <TouchableOpacity
                    onPress={() =>
                        navigate('VideoScreen', {
                            videoName: 'Landala 3',
                            videoDescription: 'I give a damn because a good',
                            videoStatus: 'not avalable',
                            videoType: 'avalable, live, ',
                            videoUrl: 'url to video'
                        })
                    }
                >
                    <View style={[MainStyles.VIDEO_BUTTON]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../../assets/icons/tennis.png')}
                        />
                    </View>
                </TouchableOpacity>

                <View style={[MainStyles.MAIN_CARD]}>
                    <Text style={MainStyles.MAIN_CARD_TITLE}>SM i rugby</Text>
                    <Text>
                        Behind you, stands a symbol of oppression. Blackgate
                        Prison, where a thousand men have languished under the
                        name of this man: Harvey Dent.
                    </Text>
                </View>
            </View>
        );
    }
}
