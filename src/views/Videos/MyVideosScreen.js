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
        const { navigate } = this.props.navigation;
        if (this.props.authenticated) {
            return (
                <View>
                    <TouchableOpacity
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
                        <VideoSmallButton title="SM i Rugby" />
                    </TouchableOpacity>

                    <TouchableOpacity
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
                        <VideoSmallButton title="JSM i Tennis" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigate('VideoScreen', {
                                videoName: 'VM Finalen 1994',
                                videoDescription:
                                    'I give a damn because a good',
                                videoStatus: 'not avalable',
                                videoType: 'avalable, live, ',
                                vidioUrl: 'url to video'
                            })}
                    >
                        <VideoSmallButton title="VM Finalen 1994" />
                    </TouchableOpacity>
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
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(MyVideosScreen);
