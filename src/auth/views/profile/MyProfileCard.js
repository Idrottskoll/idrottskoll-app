'use strict';

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import MainStyles from '../../../assets/styles/MainStyles';
import StyleRules from '../../../assets/styles/StyleRules';
import Signout from '../../../components/auth/Signout';

class MyProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * @param string email
     * @return null
     */
    userRequestedNewPassword = email => {
        if (email) {
            Alert.alert(
                'Är du säker på att du vill ändra lösenord för:',
                `${email}?`,
                [
                    {
                        text: 'Avsluta',
                        style: 'cancel'
                    },
                    {
                        text: 'Ja',
                        onPress: () =>
                            this.props
                                .changeUserPassword(email)
                                .then(response => {
                                    if (response) {
                                        Alert.alert(
                                            `${response.data.message}:`,
                                            email
                                        );
                                    }
                                })
                    }
                ],
                { cancelable: false }
            );
            return;
        }
    };

    render() {
        return (
            <View>
                {this.props.data && this.props.authenticated ? (
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginVertical: StyleRules.MARGIN * 2
                            }}
                        >
                            <Image
                                style={{
                                    width: 192,
                                    height: 192,
                                    borderRadius: 192 / 2,
                                    shadowColor: StyleRules.MAIN_SHADOW_COLOR,
                                    shadowOffset: {
                                        height: 3,
                                        width: 3
                                    },
                                    shadowOpacity: 0.1
                                }}
                                source={{
                                    uri:
                                        'https://www.idrottskoll.se/avatar/default.png'
                                }}
                            />
                        </View>

                        <View style={[MainStyles.MAIN_CARD]}>
                            <View>
                                <Text style={MainStyles.MAIN_CARD_TITLE}>
                                    {this.props.data.name}
                                </Text>
                                <Text style={styles.TEXT_STYLE}>
                                    {this.props.data.email}
                                </Text>
                            </View>
                            <View style={styles.USER_DATA}>
                                <Text style={styles.TEXT_STYLE_BIG}>
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
                                                )
                                            }
                                        >
                                            <Text
                                                style={[
                                                    {
                                                        marginTop:
                                                            StyleRules.MARGIN /
                                                            2
                                                    },
                                                    styles.TEXT_STYLE
                                                ]}
                                            >
                                                Ändra mitt lösenord
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    USER_DATA: {
        marginVertical: StyleRules.MARGIN
    },

    TEXT_STYLE_BIG: {
        marginTop: StyleRules.MARGIN / 2,
        fontSize: StyleRules.FONT_SIZE_TITLE,
        fontWeight: 'bold',
        fontFamily: 'Fjalla One'
    },

    TEXT_STYLE: {
        marginTop: StyleRules.MARGIN / 2,
        fontSize: StyleRules.FONT_SIZE
    },

    FOOTER: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: StyleRules.MARGIN * 3
    }
});

const mapStateToProps = state => {
    return {
        data: state.auth.data,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(MyProfileCard);
