import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet, Image} from 'react-native';
const iconStyle = require('./styles/NavStyles');
import Home from './components/Views/Home/Home';
const App = TabNavigator({
    Home: { screen: Home,
        navigationOptions: {
            tabBarLabel: 'IDK Hem',
            tabBarIcon: ({ focused }) => {
                const imgSource = focused ? require('./icons/ic.png') : require('./icons/ic.png');
                return <Image
                source={imgSource}
                style={iconStyle.icon}
                />
            },
        },
    },
});

export default App;
