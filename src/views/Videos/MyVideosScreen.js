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

    renderComponents = () => {
        let { navigate } = this.props.navigation;
        if (this.props.authenticated) {
            return <View />;
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
        let { navigate } = this.props.navigation;
        console.log(this.props.data);
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

                    {/* {this.renderComponents()} */}

                    {this.props.data && this.props.authenticated
                        ? this.props.data.video.map(video => (
                              <TouchableOpacity
                                  key={video._id}
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
                                  <VideoSmallButton title={video.sport} />
                              </TouchableOpacity>
                          ))
                        : null}

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
