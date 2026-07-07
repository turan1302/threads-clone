import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
