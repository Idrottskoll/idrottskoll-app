'use strict';

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';

class InformationScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        // <Header /> is a secreet button that will sign the user out
        headerRight: <Header />
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>Om oss</Text>
                        <Text>
                            Every year, I took a holiday. I went to Florence,
                            this cafe on the banks of the Arno. Every fine
                            evening, I would sit there and order a Fernet
                            Branca. I had this fantasy, that I would look across
                            the tables and I would see you there with a wife
                            maybe a couple of kids. You wouldn't say anything to
                            me, nor me to you. But we would both know that
                            you've made it, that you were happy. I never wanted
                            you to come back to Gotham. I always knew there was
                            nothing here for you except pain and tragedy and I
                            wanted something more for you than that. I still do.
                        </Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            Några tureringar som IdrottsKoll har filmat:
                        </Text>
                        <Text>
                            Every year, I took a holiday. I went to Florence,
                            this cafe on the banks of the Arno. Every fine
                            evening, I would sit there and order a Fernet
                            Branca.
                        </Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>Kontakt</Text>
                        <Text>
                            Joakim Remler Tele: 303i290221, epost:
                            Joakim@idrottskoll.se
                        </Text>
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(InformationScreen);
