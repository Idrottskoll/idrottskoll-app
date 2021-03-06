'use strict';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import VideoSmallButton from './VideoSmallButton';
import DefaultCard from '../../../universal/components/cards/DefaultCard';
import ViewContainer from '../../../universal/components/ViewContainer';
import ScrollViewContainer from '../../../universal/components/ScrollViewContainer';
import OrderNewVideoCard from '../../../universal/components/cards/OrderNewVideoCard';
import MainStyles from '../../../assets/styles/MainStyles';
import StyleRules from '../../../assets/styles/StyleRules';
import NotAuthCard from '../../../universal/components/cards/NotAuthCard';

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
        return (
            <View>
                {this.props.data && this.props.data.video.length !== 0 ? (
                    this.props.data.video.map(video => (
                        <TouchableOpacity
                            key={video.name}
                            onPress={() =>
                                navigate('VideoScreen', {
                                    videoTitle: video.sport,
                                    videoName: `${video.sport}, ${
                                        video.club
                                    } bana ${video.court}.`,
                                    videoDescription: `Inspelat: ${this.convertTime(
                                        video.startTime
                                    )}.`,
                                    isRecorded: video.isRecorded,
                                    uploaded: video.uploaded,
                                    videoUrl: video.name,
                                    liveURL: false,
                                    club: video.club,
                                    court: video.court
                                })
                            }
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
                            Här kan du se dina videos som du redan har köpt.
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

const mapStateToProps = state => {
    return { data: state.auth.data, authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(MyVideosScreen);
