import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';

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
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        alignItems: 'flex-end',
        padding: 15,
        paddingBottom: 25,
        height: 87.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: StyleRules.MAIN_SHADOW_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        zIndex: 1
    }
});
