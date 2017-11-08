'use strict';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import DefaultCard from '../../components/Cards/DefaultCard';
import VideoSmallButton from './VideoSmallButton';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import NotAuthCard from '../../components/Cards/NotAuthCard';

class MyVideosScreen extends React.Component {
    constructor(props) {
        super(props);
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

    /**
    * Method dose logic for sorting i a user has videos to display
    */
    renderComponents = () => {
        const { navigate } = this.props.navigation;
        if (this.props.authenticated) {
            return (
                <View>
                    {this.props.data && this.props.data.video.length !== 0 ? (
                        this.props.data.video.map(video => (
                            <TouchableOpacity
                                key={video.name}
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
                                <VideoSmallButton title={video.sport} />
                            </TouchableOpacity>
                        ))
                    ) : (
                        <DefaultCard>
                            <TouchableOpacity
                                onPress={() => navigate('OrderNewScreen')}
                            >
                                <Text>
                                    Du har inga videos än men du kan beställa en
                                    här!
                                </Text>
                            </TouchableOpacity>
                        </DefaultCard>
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

                    {this.renderComponents()}

                    <OrderNewVideoCard title="Intresserad av en ny video?">
                        <TouchableOpacity
                            style={[
                                MainStyles.MAIN_BUTTON,
                                { marginLeft: StyleRules.MARGIN }
                            ]}
                            onPress={() => navigate('OrderNewScreen')}
                        >
                            <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                Beställ
                            </Text>
                        </TouchableOpacity>
                    </OrderNewVideoCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { data: state.auth.data, authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(MyVideosScreen);
