'use strict';

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MainStyles from '../../assets/styles/MainStyles';

class MyProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderVideos() {
        console.log(this.props.content);
    }

    render() {
        console.log(this.props.authenticated);
        return (
            <View>
                {this.props.content ? (
                    <View>
                        <Text>{this.props.content.name}</Text>
                        <Text>{this.props.content.email}</Text>
                    </View>
                ) : (
                    <Text>Logga in för att se din profil</Text>
                )}
                {/* <Text>Videos: {this.renderVideos()}</Text> */}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        content: state.auth.content,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(MyProfileCard);
