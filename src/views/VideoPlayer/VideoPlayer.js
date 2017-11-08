'use strict';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { VIDEO_URL } from '../../actions/config';

// TODO: all binde methods in constructor make a callback function (looks better)
// TODO: Fix styles and buttons
// TODO: Add app colors to the styles

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        header: false
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
        isBuffering: false
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

    renderSkinControl(skin) {
        const isSelected = this.state.skin == skin;
        const selectControls = skin == 'native' || skin == 'embed';
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        controls: selectControls,
                        skin: skin
                    });
                }}
            >
                <Text
                    style={[
                        styles.controlOption,
                        { fontWeight: isSelected ? 'bold' : 'normal' }
                    ]}
                >
                    {skin}
                </Text>
            </TouchableOpacity>
        );
    }

    renderResizeModeControl(resizeMode) {
        const isSelected = this.state.resizeMode == resizeMode;

        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ resizeMode: resizeMode });
                }}
            >
                <Text
                    style={[
                        styles.controlOption,
                        { fontWeight: isSelected ? 'bold' : 'normal' }
                    ]}
                >
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        );
    }

    renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
        const isSelected = this.state.ignoreSilentSwitch == ignoreSilentSwitch;

        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ ignoreSilentSwitch: ignoreSilentSwitch });
                }}
            >
                <Text
                    style={[
                        styles.controlOption,
                        { fontWeight: isSelected ? 'bold' : 'normal' }
                    ]}
                >
                    {ignoreSilentSwitch}
                </Text>
            </TouchableOpacity>
        );
    }

    renderCustomSkin() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.fullScreen}
                    onPress={() => {
                        this.setState({ paused: !this.state.paused });
                    }}
                >
                    <Video
                        source={{ uri: `${VIDEO_URL}/${params.videoUrl}` }}
                        style={styles.fullScreen}
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
                    />
                </TouchableOpacity>

                <View style={styles.controls}>
                    <View style={styles.generalControls}>
                        <View style={styles.skinControl}>
                            {this.renderSkinControl('custom')}
                            {this.renderSkinControl('native')}
                            {this.renderSkinControl('embed')}
                        </View>
                    </View>

                    <View style={styles.generalControls}>
                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('cover')}
                            {this.renderResizeModeControl('contain')}
                            {this.renderResizeModeControl('stretch')}
                        </View>
                    </View>

                    <View style={styles.trackingControls}>
                        <View style={styles.progress}>
                            <View
                                style={[
                                    styles.innerProgressCompleted,
                                    { flex: flexCompleted }
                                ]}
                            />
                            <View
                                style={[
                                    styles.innerProgressRemaining,
                                    { flex: flexRemaining }
                                ]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    renderNativeSkin() {
        const videoStyle =
            this.state.skin == 'embed'
                ? styles.nativeVideoControls
                : styles.fullScreen;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.fullScreen}>
                    <Video
                        source={{ uri: `${VIDEO_URL}/${params.videoUrl}` }}
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
                </View>
                <View style={styles.controls}>
                    <View style={styles.generalControls}>
                        <View style={styles.skinControl}>
                            {this.renderSkinControl('custom')}
                            {this.renderSkinControl('native')}
                            {this.renderSkinControl('embed')}
                        </View>
                    </View>

                    <View style={styles.generalControls}>
                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('cover')}
                            {this.renderResizeModeControl('contain')}
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { params } = this.props.navigation.state;
        return this.state.controls
            ? this.renderNativeSkin()
            : this.renderCustomSkin();
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
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 10
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }
});
