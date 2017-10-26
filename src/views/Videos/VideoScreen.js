'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

class VideoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    renderVideos() {
        console.log(this.props.content);
    }

    componentWillMount() {
        if (this.props.authenticated) {
            this.props.fetchAuthUserContent('user');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.authenticated);

        return (
            <ViewContainer>
                <Header />
                <ScrollViewContainer>
                    <DefaultCard>
                        <View>
                            {this.props.content ? (
                                <View>
                                    <Text>NAME: {this.props.content.name}</Text>
                                    <Text>
                                        E-POST: {this.props.content.email}
                                    </Text>
                                </View>
                            ) : (
                                <Text>Logga in först</Text>
                            )}
                            {/* <Text>Videos: {this.renderVideos()}</Text> */}
                        </View>
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(VideoScreen);
