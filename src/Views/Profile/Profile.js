import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Style from '../../assets/styles/GlobalStyles';
import Header from '../../components/Header/Header';

export default class Profile extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.p}>Profile</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Style.CARD_HEIGHT,
        padding: Style.CARD_PADDING_X,
        alignItems: 'stretch',
    },
    p: {
        fontSize: Style.FONT_SIZE,
    },
});
