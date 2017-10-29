'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MyProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderVideos() {
        console.log(this.props.content);
    }

    componentWillMount = () => {
        if (this.props.authenticated) {
            this.props.fetchAuthUserContent('user');
        }
    };

    render() {
        return (
            <View>
                {this.props.content ? (
                    <View>
                        <Text>{this.props.content.name}</Text>
                        <Text>{this.props.content.email}</Text>
                    </View>
                ) : (
                    <Text>Profil</Text>
                )}
                {/* <Text>Videos: {this.renderVideos()}</Text> */}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(MyProfileCard);
