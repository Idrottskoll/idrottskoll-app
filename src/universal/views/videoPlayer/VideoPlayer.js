'use strict';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { VIDEO_URL } from '../../../actions/config';

// TODO: Add close button to navigate back
// TODO: add paus button

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        header: false,
        tabBarVisible: false
    });

    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        controls: false,
        paused: false,
        skin: 'custom',
        ignoreSilentSwitch: null,
        isBuffering: false,
        showControlls: false
    };

    onLoad = data => {
        this.setState({ duration: data.duration });
    };

    onProgress = data => {
        this.setState({ currentTime: data.currentTime });
    };

    onBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
        this.setState({ isBuffering });
    };

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return (
                parseFloat(this.state.currentTime) /
                parseFloat(this.state.duration)
            );
        } else {
            return 0;
        }
    }

    renderNativeSkin() {
        const videoStyle =
            this.state.skin == 'embed'
                ? styles.nativeVideoControls
                : styles.fullScreen;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity
                    style={styles.fullScreen}
                    onPress={() =>
                        this.setState({
                            ShowControlls: !this.state.ShowControlls
                        })}
                > */}
                <View style={styles.fullScreen}>
                    {params.liveURL ? (
                        <Video
                            source={{ uri: params.liveURL }}
                            style={videoStyle}
                            rate={this.state.rate}
                            paused={this.state.paused}
                            volume={this.state.volume}
                            muted={this.state.muted}
                            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                            resizeMode={this.state.resizeMode}
                            onLoad={this.onLoad}
                            onBuffer={this.onBuffer}
                            onProgress={this.onProgress}
                            repeat={false}
                            controls={this.state.controls}
                        />
                    ) : (
                        <Video
                            source={{
                                uri: `${VIDEO_URL}/${params.videoUrl}`
                            }}
                            style={videoStyle}
                            rate={this.state.rate}
                            paused={this.state.paused}
                            volume={this.state.volume}
                            muted={this.state.muted}
                            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                            resizeMode={this.state.resizeMode}
                            onLoad={this.onLoad}
                            onBuffer={this.onBuffer}
                            onProgress={this.onProgress}
                            repeat={false}
                            controls={this.state.controls}
                        />
                    )}
                </View>
                {/* </TouchableOpacity> */}
            </View>
        );
    }

    render() {
        const { params } = this.props.navigation.state;
        return this.renderNativeSkin();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },

    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 44,
        left: 4,
        right: 4
    },

    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden'
    },

    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc'
    },

    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C'
    },

    nativeVideoControls: {
        top: 184,
        height: 300
    }
});
