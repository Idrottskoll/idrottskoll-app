import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView>
                    <DefaultCard />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    p: {
        fontSize: StyleRules.FONT_SIZE,
    },
});
