'use strict';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import OrderNewVideoCard from '../../components/Cards/OrderNewVideoCard';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import MainStyles from '../../assets/styles/MainStyles';
import StyleRules from '../../assets/styles/StyleRules';

export default class OrderNewScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    handelOrder() {
        alert('push button');
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
                        <Text>
                            Take a look, his speed, his ferocity, his training.
                            I see the power of belief. I see the League of
                            Shadows resurgent.
                        </Text>
                    </DefaultCard>

                    <OrderNewVideoCard title="Fyll i formuläret för att lägga till en beställning">
                        <TouchableOpacity
                            style={[
                                MainStyles.MAIN_BUTTON,
                                { marginLeft: StyleRules.MARGIN }
                            ]}
                            onPress={this.handelOrder}
                        >
                            <Text style={MainStyles.MAIN_BUTTON_TEXT}>
                                Beställ
                            </Text>
                        </TouchableOpacity>
                    </OrderNewVideoCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({});
