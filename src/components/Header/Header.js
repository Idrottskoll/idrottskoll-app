import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>IDK</Text>
                <Text>Idrottskoll</Text>
                <Text>IDK</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingTop: Style.CARD_PADDING_Y,
        padding: Style.CARD_PADDING_X,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
    },
});
