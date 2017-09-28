import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Image, StyleSheet} from 'react-native';
import Home from './components/Views/Home/Home';

const Tabs = TabNavigator({
    Home: { screen: Home,
        navigationOptions: {
            tabBarLabel: 'IDK Hem',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused ? require('./icons/ic.png') : require('./icons/ic.png');
                return <Image
                source={imgSource}
                style={styles.icon}
                />
            },
        },
    },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default Tabs;
