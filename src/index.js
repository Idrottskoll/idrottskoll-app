import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import Home from './views/Home/Home';
import Information from './views/Information/Information';
import Videos from './views/Videos/Videos';
import Profile from './views/Profile/Profile';
const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'IDK Hem',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('./assets/icons/ic.png')
                    : require('./assets/icons/ic.png');
                return <Image source={imgSource} style={styles.icon} />;
            },
        },
    },
    Information: {
        screen: Information,
        navigationOptions: {
            tabBarLabel: 'Information',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('./assets/icons/ic.png')
                    : require('./assets/icons/ic.png');
                return <Image source={imgSource} style={styles.icon} />;
            },
        },
    },
    Videos: {
        screen: Videos,
        navigationOptions: {
            tabBarLabel: 'Videos',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('./assets/icons/ic.png')
                    : require('./assets/icons/ic.png');
                return <Image source={imgSource} style={styles.icon} />;
            },
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('./assets/icons/ic.png')
                    : require('./assets/icons/ic.png');
                return <Image source={imgSource} style={styles.icon} />;
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
