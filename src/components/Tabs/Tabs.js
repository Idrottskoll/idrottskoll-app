import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

import StyleRules from '../../assets/styles/StyleRules';

import HomeScreen from '../../views/Home/HomeScreen';
import InformationScreen from '../../views/Information/InformationScreen';
import MyVideosScreen from '../../views/Videos/MyVideosScreen';
import VideoScreen from '../../views/Videos/VideoScreen';
import ProfileScreen from '../../views/Profile/ProfileScreen';
import OrderNewScreen from '../../views/Order/OrderNewScreen';

// Auth's
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const deviceHeight = Dimensions.get('window').height;

// StackNavigator for the homeScreen
const HomeScreenStack = StackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Idrottskoll'
            }
        },
        VideoScreen: {
            screen: VideoScreen
        },
        OrderNewScreen: {
            screen: OrderNewScreen
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

// StackNavigator for MyVideosScreen
const MyVideosScreenStack = StackNavigator(
    {
        MyVideosScreen: {
            screen: MyVideosScreen,
            navigationOptions: {
                title: 'Idrottskoll'
            }
        },
        VideoScreen: {
            screen: VideoScreen
        },
        OrderNewScreen: {
            screen: OrderNewScreen
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
            screen: HomeScreenStack,
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
        MyVideosScreen: {
            screen: MyVideosScreenStack,
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
            screen: ProfileScreen,
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
