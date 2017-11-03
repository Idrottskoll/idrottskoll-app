'use strict';

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import OrderNewScreen from '../Order/OrderNewScreen';

import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

export default class VideoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title:
            navigation.state.params.videoStatus === 'live'
                ? `Live Nu på ${navigation.state.params.videoName}`
                : navigation.state.params.videoName
    });

    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer backdrop={true}>
                <ScrollViewContainer>
                    <View style={[MainStyles.VIDEO_CARD]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../assets/icons/football.png')}
                        />
                    </View>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            {params.videoName}
                        </Text>
                        <Text>{params.videoDescription}</Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>Status</Text>
                        <Text>{params.videoStatus}</Text>
                    </DefaultCard>
                    {/* if videoStatus is not avalable will not show order button */}
                    {params.videoStatus !== 'not avalable' ? (
                        <OrderNewVideoCard>
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
                    ) : (
                        <View />
                    )}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
