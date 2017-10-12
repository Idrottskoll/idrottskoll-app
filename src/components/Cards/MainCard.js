import React from 'react';
import DefaultCard from './DefaultCard';
import { View, Text } from 'react-native';
export default class MainCard extends DefaultCard {
    render() {
        return (
            <DefaultCard>
                <View>
                    <Text>Hej</Text>
                </View>
            </DefaultCard>
        );
    }
}
