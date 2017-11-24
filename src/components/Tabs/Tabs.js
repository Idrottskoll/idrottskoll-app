import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';
import StyleRules from '../../assets/styles/StyleRules';

import HomeScreen from '../../auth/views/home/HomeScreen';
import InformationScreen from '../../auth/views/information/InformationScreen';
import MyVideosScreen from '../../auth/views/videos/MyVideosScreen';
import VideoScreen from '../../auth/views/videos/VideoScreen';
import ProfileScreen from '../../auth/views/profile/ProfileScreen';
import UserSettings from '../../auth/views/profile/UserSettings';
import OrderNewScreen from '../../universal/views/order/OrderNewScreen';
import VideoPlayer from '../../universal/views/videoPlayer/VideoPlayer';

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
        },
        VideoPlayer: {
            screen: VideoPlayer
        }
    },
    {
        navigationOptions: {
            // header: false,
            headerStyle: {
                shadowColor: StyleRules.MAIN_SHADOW_COLOR,
                shadowOpacity: 0.1,
                shadowOffset: {
                    height: 0.5,
                    width: 0.5
                },
                backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
                // if platform is iOS and device height is iPhone X
                height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 80
            },
            headerTitleStyle: {
                // add title styles
                fontSize: StyleRules.FONT_SIZE_MEDIUM,
                fontWeight: '600',
                fontFamily: 'Fjalla One'
            }
        }
    }
);

const InformationScreenStack = StackNavigator(
    {
        InformationScreen: {
            screen: InformationScreen,
            navigationOptions: {
                title: 'Idrottskoll'
            }
        }
    },
    {
        navigationOptions: {
            // header: false,
            headerStyle: {
                shadowColor: StyleRules.MAIN_SHADOW_COLOR,
                shadowOpacity: 0.1,
                shadowOffset: {
                    height: 0.5,
                    width: 0.5
                },
                backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
                // if platform is iOS and device height is iPhone X
                height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 80
            },
            headerTitleStyle: {
                // add title styles
                fontSize: StyleRules.FONT_SIZE_MEDIUM,
                fontWeight: '600',
                fontFamily: 'Fjalla One'
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
        },
        VideoPlayer: {
            screen: VideoPlayer
        }
    },
    {
        navigationOptions: {
            // header: false,
            headerStyle: {
                shadowColor: StyleRules.MAIN_SHADOW_COLOR,
                shadowOpacity: 0.1,
                shadowOffset: {
                    height: 0.5,
                    width: 0.5
                },
                backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
                // if platform is iOS and device height is iPhone X
                height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 80
            },
            headerTitleStyle: {
                // add title styles
                fontSize: StyleRules.FONT_SIZE_MEDIUM,
                fontWeight: '600',
                fontFamily: 'Fjalla One'
            }
        }
    }
);

const ProfileScreenStack = StackNavigator(
    {
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Idrottskoll'
            }
        },
        UserSettings: {
            screen: UserSettings
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
                shadowOpacity: 0.1,
                shadowOffset: {
                    height: 0.5,
                    width: 0.5
                },
                backgroundColor: StyleRules.CARD_BACKGROUND_COLOR,
                // if platform is iOS and device height is iPhone X
                height: Platform.OS === 'ios' && deviceHeight === 812 ? 110 : 80
            },
            headerTitleStyle: {
                // add title styles
                fontSize: StyleRules.FONT_SIZE_MEDIUM,
                fontWeight: '600',
                fontFamily: 'Fjalla One'
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
            screen: InformationScreenStack,
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
                tabBarLabel: 'Mina videos',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../assets/icons/menuMyVideosActive.png')
                        : require('../../assets/icons/menuMyVideosDefault.png');
                    return <Image source={imgSource} style={styles.icon} />;
                }
            }
        },
        ProfileScreen: {
            screen: ProfileScreenStack,
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
                height: Platform.OS === 'ios' ? 65 : 65,
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
        // width: 32,
        // height: 32
    }
});

export default Tabs;
