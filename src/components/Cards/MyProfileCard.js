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

    renderVideos = () => {
        if (this.props.content) {
            const videos = this.props.content.video;
            console.log(videos);
            videos.forEach(element => {
                console.log(element);
            });
        }
    };

    render() {
        return (
            <View>
                {this.props.content ? (
                    <View style={[MainStyles.MAIN_CARD]}>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            {this.props.content.name}
                        </Text>
                        <Text>{this.props.content.email}</Text>
                        <Text>Fakturering</Text>
                        <Text>Namn: {this.props.content.name}</Text>
                        <Text>Adress: Oluff Nilssons väg 4</Text>
                        <Text>Postnummer: 433 36</Text>
                        <Text>Ort: Partille</Text>
                        <View>
                            <TouchableOpacity>
                                <Text>Ändra mina uppgifter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Ändra mitt lösenord</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}
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
