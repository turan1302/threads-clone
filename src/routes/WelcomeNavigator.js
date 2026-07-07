import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View, Platform, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigator from './HomeNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessagesNavigator from './MessagesNavigator';
import FavouritesNavigator from './FavouritesNavigator';

const Tab = createBottomTabNavigator();

const TAB_COLOR_ACTIVE = '#fff';
const TAB_COLOR_INACTIVE = '#808080';
const TAB_BAR_BG = '#000';

const WelcomeNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = [];
                const bottomInset = insets.bottom;
                const tabBarHeight = (Platform.OS === 'ios' ? 60 : 56) + bottomInset;

                return {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR_ACTIVE,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    sceneContainerStyle: { backgroundColor: TAB_BAR_BG },
                    tabBarBackground: () => (
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: TAB_BAR_BG,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                overflow: 'hidden',
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        switch (route.name) {
                            case 'HomeNavigator':
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case 'AddNavigator':
                                iconName = focused ? 'add' : 'add-outline';
                                break;
                            case 'MessagesNavigator':
                                iconName = focused ? 'paper-plane' : 'paper-plane-outline';
                                break;
                            case 'FavouritesNavigator':
                                iconName = focused ? 'heart' : 'heart-outline';
                                break;
                            case 'ProfileNavigator':
                                iconName = focused ? 'person' : 'person-outline';
                                break;
                            default:
                                iconName = 'home';
                        }

                        const color = focused ? TAB_COLOR_ACTIVE : TAB_COLOR_INACTIVE;

                        if (route.name === 'AddNavigator') {
                            return (
                                <View
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#808080',
                                    }}
                                >
                                    <Ionicons name="add" size={24} color={TAB_COLOR_ACTIVE} />
                                </View>
                            );
                        }

                        if (focused) {
                            return (
                                <View
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 22,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Ionicons name={iconName} size={25} color={color} />
                                </View>
                            );
                        }

                        return <Ionicons name={iconName} size={25} color={color} />;
                    },
                    tabBarStyle:
                        tabBarHidden.includes(routeName)
                            ? { display: 'none' }
                            : {
                                backgroundColor: TAB_BAR_BG,
                                borderTopWidth: 0,
                                height: tabBarHeight,
                                paddingTop: 8,
                                paddingBottom: bottomInset + 8,
                                elevation: 0,
                                shadowOpacity: 0,
                            },
                };
            }}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{ tabBarLabel: 'Anasayfa' }}
            />
            <Tab.Screen
                name="MessagesNavigator"
                component={MessagesNavigator}
                options={{ tabBarLabel: 'Mesajlar' }}
            />
            <Tab.Screen
                name="AddNavigator"
                component={() => <></>}
                options={{
                    tabBarLabel: 'Ekle',
                    tabBarButton: (props) => (
                        <Pressable {...props} onPress={e => e.preventDefault()} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="FavouritesNavigator"
                component={FavouritesNavigator}
                options={{ tabBarLabel: 'Favoriler' }}
            />
            <Tab.Screen
                name="ProfileNavigator"
                component={() => <></>}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarButton: (props) => <Pressable {...props} disabled />,
                }}
            />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;
