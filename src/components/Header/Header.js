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
        backgroundColor: '#ffffff',
        alignItems: 'flex-end',
        padding: 15,
        height: 88,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0.5,
            width: 0.5,
        },
        marginBottom: StyleRules.MARGIN,
    },
});
