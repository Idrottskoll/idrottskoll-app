'use strict';

import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    Image,
    StyleSheet
} from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoLargeButton from '../Videos/VideoLargeButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import LiveNowCard from '../../components/Cards/LiveNowCard';
import StyleRules from '../../assets/styles/StyleRules';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <View>
                        <View style={[MainStyles.VIDEO_BUTTON]}>
                            <Image
                                style={MainStyles.VIDEO_CONTAINER}
                                source={require('../../assets/icons/football.png')}
                            />
                            <TouchableHighlight
                                underlayColor={StyleRules.BLUE_GRADIENT_COLOR}
                                activeOpacity={0.8}
                                style={styles.OPEN_VIDEO_BUTTON}
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
                                <Text style={styles.BUTTON_TITLE}>
                                    Lås upp video
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={[MainStyles.MAIN_CARD]}>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                SM i rugby
                            </Text>
                            <Text>
                                Behind you, stands a symbol of oppression.
                                Blackgate Prison, where a thousand men have
                                languished under the name of this man: Harvey
                                Dent.
                            </Text>
                        </View>
                    </View>
                    {/* <TouchableOpacity
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
                    </TouchableOpacity> */}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    OPEN_VIDEO_BUTTON: {
        position: 'absolute',
        width: 175,
        height: 45,
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: StyleRules.CARD_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.95
    },
    BUTTON_TITLE: {
        color: StyleRules.TEXT_COLOR,
        fontSize: 18
    }
});
