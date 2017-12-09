'use strict';

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import DefaultCard from '../../../components/Cards/DefaultCard';
import ViewContainer from '../../../universal/components/ViewContainer';
import ScrollViewContainer from '../../../universal/components/ScrollViewContainer';
import MainStyles from '../../../assets/styles/MainStyles';
import StyleRules from '../../../assets/styles/StyleRules';
import * as actions from '../../../actions';
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
                        <Text style={{ fontSize: StyleRules.FONT_SIZE }}>
                            Idrottskoll grundades 2014, med idén om att alla
                            skall kunna utveckla sin idrott med hjälp av video.
                            Idag använder elitspelare och top klubbar dagligen
                            video anslysering för att förbättra deras
                            prestationer. Både genom att hitta vad man kan
                            förbättra i sitt spel, men även plocka ut de
                            possitiva sekvenserna ur en match eller träning.
                        </Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={{ fontSize: StyleRules.FONT_SIZE }}>
                            Idrottskoll skapades för alla, med grund idén om att
                            även kalle 5 år skall både ha råd och möjlighet att
                            analysera sin match och träning. Tänk om alla som
                            satsa på sin idrott kan ha tillgång till material
                            som annars bara elitspelare har tillgång till. Tänk
                            hur mycket fortare man kan utvecklas.
                        </Text>
                    </DefaultCard>

                    <DefaultCard>
                        <Text style={{ fontSize: StyleRules.FONT_SIZE }}>
                            I systemet kan man på ett snabbt och enkelt sätt
                            spela in sina matcher och träningar för att efteråt
                            analysera dem. Man kan antingen streama matchen från
                            hemsidan eller här i appen.
                        </Text>
                        <Text style={{ fontSize: StyleRules.FONT_SIZE }}>
                            Idrottskoll erbjuder även live streamning från
                            utvalda event och turneringar.
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
