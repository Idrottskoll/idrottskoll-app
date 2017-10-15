import React from 'react';
import { ScrollView, View } from 'react-native';
import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';

export default class Profile extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView>
                    <DefaultCard title="hej hej" taglinne="idk idk" />
                </ScrollView>
            </View>
        );
    }
}
