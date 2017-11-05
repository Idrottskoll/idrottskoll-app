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

// TODO: Write logic to change images depending on what sport it is
export default class VideoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.videoTitle
    });

    /**
    * @param string string
    * @return string text
    */
    titleToUppercase(string) {
        return string.replace(/\w\S*/g, text => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }

    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer videoStatus={params.videoStatus} backdrop={true}>
                <ScrollViewContainer>
                    <View style={[MainStyles.VIDEO_CARD]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../assets/icons/football.png')}
                        />
                    </View>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            {this.titleToUppercase(params.videoName)}
                        </Text>
                        <Text>{params.videoDescription}</Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>Status</Text>
                        {params.isRecorded ? (
                            <Text>Videon är inspelad.</Text>
                        ) : (
                            <Text>Videon är inte inspelad.</Text>
                        )}
                    </DefaultCard>

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
