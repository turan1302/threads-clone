import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import WelcomeNavigator from './WelcomeNavigator';
import { MenuDrawerContent } from '../components/Menu';
import { COLORS } from '../constants/theme';

const Drawer = createDrawerNavigator();
const DRAWER_WIDTH = Dimensions.get('window').width * 0.82;

const MenuNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <MenuDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStyle: styles.drawer,
                overlayColor: 'rgba(0, 0, 0, 0.55)',
                swipeEnabled: true,
                sceneContainerStyle: styles.scene,
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={WelcomeNavigator}
                options={{ drawerItemStyle: { display: 'none' } }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: COLORS.background,
        width: DRAWER_WIDTH,
        ...(Platform.OS === 'android' && { elevation: 32 }),
    },
    scene: {
        backgroundColor: COLORS.background,
    },
});

export default MenuNavigator;
