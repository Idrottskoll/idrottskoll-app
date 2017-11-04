'use strict';

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MainStyles from '../../assets/styles/MainStyles';
import Signout from '../auth/Signout';

class MyProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
    * if user is authenticated will fetch user data on signin
    */
    componentWillMount() {
        if (this.props.authenticated) {
            this.props.fetchAuthUserContent('user');
        }
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
        if (this.props.content) {
            console.log(this.props.content);
        }
        return (
            <View>
                {this.props.content && this.props.authenticated ? (
                    <View style={[MainStyles.MAIN_CARD]}>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            {this.props.content.name}
                        </Text>
                        <Text>{this.props.content.email}</Text>
                        <Text>Fakturering</Text>
                        <Text>Namn: {this.props.content.name}</Text>
                        <View>
                            <TouchableOpacity>
                                <Text>Ändra mina uppgifter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Ändra mitt lösenord</Text>
                            </TouchableOpacity>
                        </View>
                        <Signout />
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
