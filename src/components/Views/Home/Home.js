import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from '../../../styles/GlobalStyles';

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.p}>width: {Style.CARD_WIDTH}</Text>
                <Text>height: {Style.CARD_HEIGHT}</Text>
                <Text>padding: {Style.CARD_PADDING_X}</Text>
                <Text>paddingTop: {Style.CARD_PADDING_Y}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Style.CARD_WIDTH,
        height: Style.CARD_HEIGHT,
        padding: Style.CARD_PADDING_X,
        paddingTop: Style.CARD_PADDING_Y,
        paddingBottom: Style.CARD_PADDING_Y,
    },
    p: {
        fontSize: Style.FONT_SIZE,
    },
});
