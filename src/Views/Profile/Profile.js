import React from 'react';
import { ScrollView, View, TextInput, StyleSheet, Button } from 'react-native';

import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {},

    email: {},

    password: {},
});
