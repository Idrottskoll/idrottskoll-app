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

    renderProfile = () => {
        this.props.fetchAuthUserContent('user');
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={MainStyles.BUTTON_SUCCESS}
                    onPress={() => this.renderProfile()}
                >
                    <Text style={MainStyles.BUTTON_SUCCESS_TEXT}>
                        Hämta profil
                    </Text>
                </TouchableOpacity>
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
