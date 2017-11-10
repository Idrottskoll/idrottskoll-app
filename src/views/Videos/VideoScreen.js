'use strict';

import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import OrderNewScreen from '../Order/OrderNewScreen';
import { VIDEO_URL } from '../../actions/config';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

// TODO: Write logic to change images depending on what sport it is
export default class VideoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.videoTitle,
        headerLeft: (
            <TouchableOpacity
                style={{ marginLeft: StyleRules.MARGIN }}
                onPress={() => navigation.goBack()}
            >
                <Image source={require('../../assets/icons/backArrow.png')} />
            </TouchableOpacity>
        )
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
        console.log('Video screen: ' + params.videoUrl);
        return (
            <ViewContainer videoStatus={params.videoStatus} backdrop={true}>
                <ScrollViewContainer>
                    <View style={[MainStyles.VIDEO_CARD]}>
                        <Image
                            style={MainStyles.VIDEO_CONTAINER}
                            source={require('../../assets/icons/football.png')}
                            // source={{
                            //     uri: `${VIDEO_URL}/${params.videoUrl}`
                            // }}
                        />
                        <TouchableOpacity
                            style={[
                                styles.UN_LOCKED_VIDEO_BUTTON_CONTAINER,
                                styles.VIDEO_BUTTON_CONTAINER
                            ]}
                            onPress={() =>
                                navigate('VideoPlayer', {
                                    videoUrl: params.videoUrl
                                })}
                        >
                            <View style={styles.UN_LOCKED_VIDEO_BUTTON}>
                                <Image
                                    source={require('../../assets/icons/playButton.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            {this.titleToUppercase(params.videoName)}
                        </Text>
                        <Text
                            style={styles.DESCRIPTION_TEXT}
                        >{`Sport: ${this.titleToUppercase(
                            params.videoTitle
                        )}.`}</Text>
                        <Text
                            style={styles.DESCRIPTION_TEXT}
                        >{`Klubb: ${this.titleToUppercase(
                            params.club
                        )}.`}</Text>
                        <Text
                            style={styles.DESCRIPTION_TEXT}
                        >{`Bana: ${params.court}.`}</Text>
                        {params.isRecorded ? (
                            <Text style={{ fontSize: StyleRules.FONT }}>
                                {params.videoDescription}
                            </Text>
                        ) : (
                            <Text style={{ fontSize: StyleRules.FONT }}>
                                Videon är inte inspelad än.
                            </Text>
                        )}
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
        fontSize: StyleRules.FONT_SIZE_MEDIUM
    },

    UN_LOCKED_VIDEO_BUTTON_CONTAINER: {
        borderRadius: 50,
        height: 60,
        width: 60
    },

    DESCRIPTION_TEXT: {
        marginBottom: StyleRules.MARGIN / 2,
        fontSize: StyleRules.FONT
    }
});
