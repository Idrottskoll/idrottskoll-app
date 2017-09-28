import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from '../../../assets/styles/GlobalStyles';
import Header from '../../Header/Header';

export default class Information extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.p}>Information</Text>
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
