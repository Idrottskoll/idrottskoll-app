import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';

import HomeScreen from '../../views/Home/HomeScreen';
import InformationScreen from '../../views/Information/InformationScreen';
import VideoScreen from '../../views/Videos/VideoScreen';
import ProfileScreen from '../../views/Profile/ProfileScreen';

// Auth's
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const StackAuth = StackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profil'
        }
    },
    Signin: {
        screen: Signin,
        navigationOptions: {
            title: 'Logga in'
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Skapa konto'
        }
    }
});

const Tabs = TabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'IDK Hem',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('../../assets/icons/menuHomeActive.png')
                    : require('../../assets/icons/menuHomeDefault.png');
                return <Image source={imgSource} style={styles.icon} />;
            }
        }
    },
    InformationScreen: {
        screen: InformationScreen,
        navigationOptions: {
            tabBarLabel: 'Information',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('../../assets/icons/menuInfoActive.png')
                    : require('../../assets/icons/menuInfoDefault.png');
                return <Image source={imgSource} style={styles.icon} />;
            }
        }
    },
    VideoScreen: {
        screen: VideoScreen,
        navigationOptions: {
            tabBarLabel: 'Videos',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('../../assets/icons/menuMyVideosActive.png')
                    : require('../../assets/icons/menuMyVideosDefault.png');
                return <Image source={imgSource} style={styles.icon} />;
            }
        }
    },
    ProfileScreen: {
        screen: StackAuth,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused
                    ? require('../../assets/icons/menuProfileActive.png')
                    : require('../../assets/icons/menuProfileDefault.png');
                return <Image source={imgSource} style={styles.icon} />;
            }
        }
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 18,
        height: 18
    }
});

export default Tabs;
