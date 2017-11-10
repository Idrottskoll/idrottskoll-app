'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker,
    DatePickerIOS,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

class OrderNewScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Beställ nytt video',
        headerLeft: (
            <TouchableOpacity
                style={{ marginLeft: StyleRules.MARGIN }}
                onPress={() => navigation.goBack()}
            >
                <Image source={require('../../assets/icons/backArrow.png')} />
            </TouchableOpacity>
        )
    });

    componentWillMount() {
        this.props.getActiveClubs();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text style={MainStyles.MAIN_CARD_TITLE}>
                            Lägg ny beställning
                        </Text>
                    </DefaultCard>

                    <OrderNewVideoCard title="Fyll i formuläret för att lägga till en beställning">
                        <TouchableOpacity
                            onPress={() => {
                                alert('order');
                            }}
                        >
                            <Text>Beställ</Text>
                        </TouchableOpacity>
                    </OrderNewVideoCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error,
        authenticated: state.auth.authenticated,
        activeClubs: state.auth.activeClubs,
        activeCourts: state.auth.activeCourts
    };
};

export default connect(mapStateToProps, actions)(OrderNewScreen);
