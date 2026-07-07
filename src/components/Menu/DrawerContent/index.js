import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../constants/theme';

const MENU_ITEMS = [
    { id: 'for-you', label: 'Senin için' },
    { id: 'following', label: 'Takip Ettiklerin' },
    { id: 'ghost', label: 'Hayalet gönderiler', icon: 'chatbubble-ellipses-outline' },
];

const MenuDrawerContent = props => {
    const insets = useSafeAreaInsets();

    return (
        <DrawerContentScrollView
            {...props}
            style={styles.drawer}
            contentContainerStyle={[
                styles.container,
                { paddingTop: insets.top + 16 },
            ]}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Akışlar</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <Ionicons name="add-circle-outline" size={26} color={COLORS.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <Ionicons name="create-outline" size={24} color={COLORS.text} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.actionRow}>
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                    <Ionicons name="heart-outline" size={22} color={COLORS.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                    <Ionicons name="bookmark-outline" size={22} color={COLORS.text} />
                </TouchableOpacity>
            </View>

            <View style={styles.menuCard}>
                {MENU_ITEMS.map((item, index) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            style={styles.menuItem}
                            activeOpacity={0.7}
                            onPress={() => props.navigation.closeDrawer()}
                        >
                            <Text style={styles.menuItemText}>{item.label}</Text>
                            {item.icon && (
                                <Ionicons
                                    name={item.icon}
                                    size={20}
                                    color={COLORS.muted}
                                />
                            )}
                        </TouchableOpacity>
                        {index < MENU_ITEMS.length - 1 && <View style={styles.divider} />}
                    </View>
                ))}
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        color: COLORS.text,
        fontSize: 28,
        fontWeight: '700',
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconButton: {
        padding: 4,
    },
    actionRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    actionButton: {
        flex: 1,
        aspectRatio: 2.4,
        maxHeight: 56,
        borderRadius: 12,
        backgroundColor: COLORS.inputBg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuCard: {
        backgroundColor: COLORS.inputBg,
        borderRadius: 14,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    menuItemText: {
        color: COLORS.text,
        fontSize: 15,
        fontWeight: '500',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: COLORS.border,
        marginHorizontal: 18,
    },
});

export default MenuDrawerContent;
