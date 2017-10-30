import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import StyleRules from '../../assets/styles/StyleRules';
import Dimensions from 'Dimensions';

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

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
        alignItems: 'flex-end',
        padding: 15,
        // if platform is iOS and device height is iPhone X
        paddingBottom: Platform.OS === 'ios' && deviceHeight === 812 ? 37 : 25,
        height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 87.5,
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
