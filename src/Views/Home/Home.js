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
                    <View style={styles.card}>
                        <Text style={styles.p}>width: {Style.CARD_WIDTH}</Text>
                        <Text>height: {Style.CARD_HEIGHT}</Text>
                        <Text>padding: {Style.CARD_PADDING_X}</Text>
                        <Text>paddingTop: {Style.CARD_PADDING_Y}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFF4',
    },
    card: {
        height: Style.CARD_HEIGHT,
        padding: Style.CARD_PADDING_X,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        margin: Style.MARGIN,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        borderRadius: 3,
    },
    p: {
        fontSize: Style.FONT_SIZE,
    },
});
