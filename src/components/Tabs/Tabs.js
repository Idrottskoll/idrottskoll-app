import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

import StyleRules from '../../assets/styles/StyleRules';

import HomeScreen from '../../views/Home/HomeScreen';
import InformationScreen from '../../views/Information/InformationScreen';
import VideoScreen from '../../views/Videos/VideoScreen';
import ProfileScreen from '../../views/Profile/ProfileScreen';

// Auth's
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const deviceHeight = Dimensions.get('window').height;

const StackAuth = StackNavigator(
    {
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Idrottskoll'
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
    },
    {
        navigationOptions: {
            // header: false,
            headerStyle: {
                shadowColor: StyleRules.MAIN_SHADOW_COLOR,
                shadowOpacity: 0.3,
                shadowOffset: {
                    height: 0.5,
                    width: 0.5
                },
                backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
                // if platform is iOS and device height is iPhone X
                height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 88
            },
            headerTitleStyle: {
                // add title styles
                fontSize: 14,
                fontWeight: '400'
            }
        }
    }
);

const Tabs = TabNavigator(
    {
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
    },
    {
        headerMode: 'none', //No navbar at the top
        tabBarPosition: 'bottom', //To make sure Android tabBar is NOT the default one
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
                height: Platform.OS === 'ios' ? 55 : 55,
                backgroundColor: '#FFFFFF',
                // if platform is iOS and device height is iPhone X will raise the bottom menue bar
                marginBottom:
                    Platform.OS === 'ios' && deviceHeight === 812 ? 30 : 0
            }
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        // Style the icons
    }
});

export default Tabs;
