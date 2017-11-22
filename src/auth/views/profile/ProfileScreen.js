'use strict';

import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import MyProfileCard from './MyProfileCard';
import ViewContainer from '../../../universal/components/ViewContainer';
import ScrollViewContainer from '../../../universal/components/ScrollViewContainer';
import MainStyles from '../../../assets/styles/MainStyles';
import StyleRules from '../../../assets/styles/StyleRules';

import OrderNewVideoCard from '../../../components/Cards/OrderNewVideoCard';
import Signin from '../../../components/auth/Signin';
import Signout from '../../../components/auth/Signout';
import Signup from '../../../components/auth/Signup';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity
                style={{ marginRight: StyleRules.MARGIN }}
                onPress={() => navigation.navigate('UserSettings')}
            >
                <Image source={require('../../../assets/icons/settings.png')} />
            </TouchableOpacity>
        )
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <MyProfileCard>
                        <TouchableOpacity
                            onPress={() => navigate('UserSettings')}
                        >
                            <Text>Ändra mina uppgifter</Text>
                        </TouchableOpacity>
                    </MyProfileCard>

                    <Signin>
                        <TouchableOpacity
                            onPress={() =>
                                navigate('UserSettings', {
                                    user: 'Glömt lösenord'
                                })}
                        >
                            <Text>Glömt lösenord?</Text>
                        </TouchableOpacity>
                    </Signin>

                    <Signup />

                    {this.props.authenticated ? (
                        <OrderNewVideoCard title="Intresserad av en ny video?">
                            <TouchableOpacity
                                style={[
                                    MainStyles.MAIN_BUTTON,
                                    { marginLeft: StyleRules.MARGIN }
                                ]}
                                onPress={() => navigate('OrderNewScreen')}
                            >
                                <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                    Beställ
                                </Text>
                            </TouchableOpacity>
                        </OrderNewVideoCard>
                    ) : null}
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const mapStateToProps = state => {
    return { authenticated: state.auth.authenticated, data: state.auth.data };
};

export default connect(mapStateToProps)(ProfileScreen);
