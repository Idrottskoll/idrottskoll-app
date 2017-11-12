'use strict';

import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { VIDEO_URL } from '../../actions/config';
import DefaultCard from '../../components/Cards/DefaultCard';
import VideoLargeButton from '../Videos/VideoLargeButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import LiveNowCard from '../../components/Cards/LiveNowCard';
import StyleRules from '../../assets/styles/StyleRules';
import { connect } from 'react-redux';
import NotAuthCard from '../../components/Cards/NotAuthCard';
import * as actions from '../../actions';

// TODO: Add bool in api to determin if a video is locked or not locked.
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
    * @param string string
    * @return string text
    */
    titleToUppercase(string) {
        return string.replace(/\w\S*/g, text => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }

    /**
    * @param string time (dirty time string)
    * @return string cleanTimeString
    */
    convertTime(time) {
        const dirtyTimeString = time.replace(/[^0-9-:]+/g, ' ');
        const cleanTimeString = dirtyTimeString.slice(0, 16);
        return cleanTimeString;
    }

    renderLiveSports = () => {
        const { navigate } = this.props.navigation;
        const live = false;
        if (live) {
            return (
                <TouchableOpacity
                    onPress={() =>
                        navigate('VideoScreen', {
                            videoTitle: 'Innebandy',
                            videoName: 'Innebandy, vallhalla bana 7.',
                            videoDescription: 'Live',
                            isRecorded: false,
                            uploaded: false,
                            videoUrl: '/stream/live/lerumstkC3.m3u8',
                            club: 'vallhalla',
                            court: 7
                        })}
                >
                    <LiveNowCard videoName="SM final Innebandy" />
                </TouchableOpacity>
            );
        }
    };

    /**
    * Method dose logic for sorting if a user has videos to display
    */
    renderComponents = () => {
        const { navigate } = this.props.navigation;
        if (this.props.authenticated) {
            return (
                <View>
                    {this.props.data && this.props.data.video.length !== 0 ? (
                        this.props.data.video.map(video => (
                            <View>
                                <View style={[MainStyles.VIDEO_BUTTON]}>
                                    <Image
                                        style={MainStyles.VIDEO_CONTAINER}
                                        source={require('../../assets/icons/tennis.png')}
                                    />
                                    {/* Button for LOCKED videos */}
                                    {/* <TouchableHighlight
                                        key={video._id}
                                        underlayColor={
                                            StyleRules.BLUE_GRADIENT_COLOR
                                        }
                                        activeOpacity={0.8}
                                        style={[
                                            styles.LOCKED_VIDEO_BUTTON_CONTAINER,
                                            styles.VIDEO_BUTTON_CONTAINER
                                        ]}
                                        onPress={() =>
                                            navigate('VideoScreen', {
                                                videoTitle: video.sport,
                                                videoName: `${video.sport}, ${video.club} bana ${video.court}.`,
                                                videoDescription: `Inspelat:  ${this.convertTime(video.startTime)}.`,
                                                isRecorded: video.isRecorded,
                                                uploaded: video.uploaded,
                                                videoUrl: video.name
                                            })}
                                    > */}
                                    {/* Button for UN LOCKED videos */}
                                    <TouchableHighlight
                                        key={video.name}
                                        underlayColor={
                                            StyleRules.BLUE_GRADIENT_COLOR
                                        }
                                        activeOpacity={0.8}
                                        style={[
                                            styles.UN_LOCKED_VIDEO_BUTTON_CONTAINER,
                                            styles.VIDEO_BUTTON_CONTAINER
                                        ]}
                                        onPress={() =>
                                            navigate('VideoScreen', {
                                                videoTitle: video.sport,
                                                videoName: `${video.sport}, ${video.club} bana ${video.court}.`,
                                                videoDescription: `Inspelat: ${this.convertTime(
                                                    video.startTime
                                                )}.`,
                                                isRecorded: video.isRecorded,
                                                uploaded: video.uploaded,
                                                videoUrl: video.name,
                                                club: video.club,
                                                court: video.court
                                            })}
                                    >
                                        {/* Button for LOCKED videos */}
                                        {/* <Text
                                            style={styles.LOCKED_VIDEO_BUTTON}
                                        >
                                            Lås upp video
                                        </Text> */}

                                        {/* Button for UN LOCKED videos */}
                                        <View
                                            style={
                                                styles.UN_LOCKED_VIDEO_BUTTON
                                            }
                                        >
                                            <Image
                                                source={require('../../assets/icons/playButton.png')}
                                            />
                                        </View>
                                    </TouchableHighlight>
                                </View>

                                <View style={[MainStyles.MAIN_CARD]}>
                                    <Text style={MainStyles.MAIN_CARD_TITLE}>
                                        {this.titleToUppercase(
                                            `${video.sport}, ${video.club} bana ${video.court}.`
                                        )}
                                    </Text>
                                    <Text>
                                        {`Inspelat: ${this.convertTime(
                                            video.startTime
                                        )}.`}
                                    </Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text>Du har inga videos</Text>
                    )}
                </View>
            );
        } else {
            return (
                <NotAuthCard blockedContent="se dina videos.">
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('ProfileScreen')}
                    >
                        <Text>Logga in här!</Text>
                    </TouchableOpacity>
                </NotAuthCard>
            );
        }
    };

    // componentWillMount() {
    //     // fetch live stream
    //     this.props.fetchLiveVideo();
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    {this.renderLiveSports()}
                    {this.renderComponents()}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    VIDEO_BUTTON_CONTAINER: {
        alignItems: 'center',
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderColor: StyleRules.CARD_BACKGROUND_COLOR,
        borderWidth: 1,
        justifyContent: 'center',
        opacity: 0.95,
        position: 'absolute',
        zIndex: 5
    },

    LOCKED_VIDEO_BUTTON_CONTAINER: {
        borderRadius: 30,
        height: 45,
        width: 175
    },

    LOCKED_VIDEO_BUTTON: {
        color: StyleRules.TEXT_COLOR,
        fontSize: StyleRules.FONT_SIZE_MEDIUM,
        fontFamily: 'Fjalla One'
    },

    UN_LOCKED_VIDEO_BUTTON_CONTAINER: {
        borderRadius: 50,
        height: 60,
        width: 60
    }
});

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(HomeScreen);
