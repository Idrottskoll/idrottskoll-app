'use strict';

import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header/Header';
import DefaultCard from '../../components/Cards/DefaultCard';
import ViewContainer from '../../components/ViewContainer';
import ScrollViewContainer from '../../components/ScrollViewContainer';

export default class InformationScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <Header />
                <ScrollViewContainer>
                    <DefaultCard>
                        <Text>Hej from InformationScreen</Text>
                    </DefaultCard>
                </ScrollViewContainer>
            </ViewContainer>
        );
    }
}
