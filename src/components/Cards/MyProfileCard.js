'use strict';

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import Signout from '../auth/Signout';

class MyProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
    * @param string userEmail
    * @return null
    */
    userRequestedNewPassword(userEmail) {
        if (userEmail) {
            Alert.alert(
                'Ändra lösenord',
                `Är du säker på att du vill ändra lösenord för ${userEmail}?`,
                [
                    {
                        text: 'Avsluta',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'Ja', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
            return;
        }
        return;
    }

    /**
    * if user is authenticated will fetch user data on signin
    */
    componentWillMount() {
        if (this.props.authenticated) {
            this.props.fetchAuthUserData('user');
        }
    }

    render() {
        return (
            <View>
                {this.props.data && this.props.authenticated ? (
                    <View style={[MainStyles.MAIN_CARD]}>
                        <View>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                {this.props.data.name}
                            </Text>
                            <Text style={{ fontSize: 16 }}>
                                {this.props.data.email}
                            </Text>
                        </View>
                        <View style={styles.USER_DATA}>
                            <Text
                                style={[
                                    styles.TEXT_STYLE,
                                    { fontWeight: 'bold' }
                                ]}
                            >
                                Fakturering
                            </Text>
                            <Text style={styles.TEXT_STYLE}>
                                Namn: {this.props.data.name}
                            </Text>
                        </View>
                        <View style={styles.FOOTER}>
                            <View>
                                <Signout />
                            </View>
                            <View>
                                <View>{this.props.children}</View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.userRequestedNewPassword(
                                                this.props.data.email
                                            )}
                                    >
                                        <Text
                                            style={{
                                                marginTop: StyleRules.MARGIN / 2
                                            }}
                                        >
                                            Ändra mitt lösenord
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ) : null}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(MyProfileCard);

const styles = StyleSheet.create({
    USER_DATA: {
        marginVertical: StyleRules.MARGIN
    },

    TEXT_STYLE: {
        marginTop: StyleRules.MARGIN / 2,
        fontSize: 16
    },
    FOOTER: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: StyleRules.MARGIN
    }
});
