'use strict';

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';

class VideoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }
    componentWillMount() {
        console.log('VideoScreen');
        this.props.fetchAuthUserContent('user');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={MainStyles.VIEW_CONTAINER}>
                <Header />
                <ScrollView>
                    <Text>content: {this.props.content}</Text>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(VideoScreen);
