import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from "../screens/Messages";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Messages"} screenOptions={() => {
            return {
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_right',
            }
        }}>
            <Stack.Screen name={"Messages"} component={Messages} />
        </Stack.Navigator>
    )
}

export default MessagesNavigator;