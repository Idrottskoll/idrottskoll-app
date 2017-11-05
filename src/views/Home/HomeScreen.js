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

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoLargeButton from '../Videos/VideoLargeButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import LiveNowCard from '../../components/Cards/LiveNowCard';
import StyleRules from '../../assets/styles/StyleRules';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLiveSports = () => {
        const { navigate } = this.props.navigation;
        const live = true;
        if (live) {
            return (
                <TouchableOpacity
                    onPress={() =>
                        navigate('VideoScreen', {
                            videoTitle: 'innebany',
                            videoName: 'innebany, vallhalla bana 7.',
                            videoDescription: 'Live',
                            isRecorded: false,
                            uploaded: false,
                            vidioUrl:
                                'idrottskoll_vallhalla_bana7_datum20171031_start2008_slut2008.mp4'
                        })}
                >
                    <LiveNowCard videoName="SM final innebany" />
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
                                        source={require('../../assets/icons/football.png')}
                                    />
                                    <TouchableHighlight
                                        key={video._id}
                                        underlayColor={
                                            StyleRules.BLUE_GRADIENT_COLOR
                                        }
                                        activeOpacity={0.8}
                                        style={styles.OPEN_VIDEO_BUTTON}
                                        onPress={() =>
                                            navigate('VideoScreen', {
                                                videoTitle: video.sport,
                                                videoName: `${video.sport}, ${video.club} bana ${video.court}.`,
                                                videoDescription: `Inspelat: ${video.startTime}.`,
                                                isRecorded: video.isRecorded,
                                                uploaded: video.uploaded,
                                                vidioUrl: video.name
                                            })}
                                    >
                                        <Text style={styles.BUTTON_TITLE}>
                                            Lås upp video
                                        </Text>
                                    </TouchableHighlight>
                                </View>

                                <View style={[MainStyles.MAIN_CARD]}>
                                    <Text style={MainStyles.MAIN_CARD_TITLE}>
                                        {`${video.sport}, ${video.club} bana ${video.court}.`}
                                    </Text>
                                    <Text>
                                        {`Inspelat: ${video.startTime}.`}
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
            return <Text>Du är inte inloggad</Text>;
        }
    };

    render() {
        if (this.props.data && this.props.data.video.length !== 0) {
            console.log(this.props.data);
        }
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

function mapStateToProps(state) {
    return { data: state.auth.data, authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(HomeScreen);
