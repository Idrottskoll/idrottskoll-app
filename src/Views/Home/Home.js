import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from '../../assets/styles/GlobalStyles';
import Header from '../../components/Header/Header';
import MainCard from '../../components/Cards/MainCard';

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.p}>width: {Style.CARD_WIDTH}</Text>
                        <Text>height: {Style.CARD_HEIGHT}</Text>
                        <Text>padding: {Style.CARD_PADDING_X}</Text>
                        <Text>paddingTop: {Style.CARD_PADDING_Y}</Text>
                        <MainCard />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Style.CARD_HEIGHT,
        padding: Style.CARD_PADDING_X,
        backgroundColor: 'gray',
        alignItems: 'stretch',
    },
    p: {
        fontSize: Style.FONT_SIZE,
    },
});
