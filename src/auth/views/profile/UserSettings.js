'use strict';

import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import StyleRules from '../../../assets/styles/StyleRules';
import ViewContainer from '../../../universal/components/ViewContainer';
import ScrollViewContainer from '../../../universal/components/ScrollViewContainer';
import ForgotPassword from '../../../unAuth/components/authenticateUser/ForgotPassword';
import DefaultCard from '../../../universal/components/cards/DefaultCard';
import MainStyles from '../../../assets/styles/MainStyles';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Inställningar',
        headerLeft: (
            <TouchableOpacity
                style={{ marginLeft: StyleRules.MARGIN }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../../../assets/icons/backArrow.png')}
                />
            </TouchableOpacity>
        )
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    {this.props.authenticated ? (
                        <DefaultCard>
                            <Text style={MainStyles.MAIN_CARD_TITLE}>
                                Här kommer du kunna ställa in dina inställningar
                                för appen.
                            </Text>
                            <Text>
                                Men i dagsläget får du besöka våran hemsida
                                istället.
                            </Text>
                        </DefaultCard>
                    ) : (
                        <ForgotPassword />
                    )}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const mapStateToProps = state => {
    return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(UserSettings);
