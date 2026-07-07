import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingTop: 37,
        marginBottom: 14,
    },
    title: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: '700',
        marginLeft: 8,
    },
    searchBar: {
        backgroundColor: COLORS.inputBg,
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 44,
        marginBottom: 8,
    },
    searchBarRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: COLORS.text,
        fontSize: 16,
        paddingVertical: 0,
        textAlignVertical: 'center',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    avatar: {
        backgroundColor: COLORS.inputBg,
    },
    userInfo: {
        flex: 1,
        marginLeft: 12,
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: COLORS.text,
        fontSize: 15,
        fontWeight: '600',
    },
    fullName: {
        color: COLORS.muted,
        fontSize: 14,
        marginTop: 2,
    },
    followers: {
        color: COLORS.muted,
        fontSize: 13,
        marginTop: 2,
    },
    followButton: {
        backgroundColor: COLORS.text,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 7,
    },
    followButtonText: {
        color: COLORS.background,
        fontSize: 14,
        fontWeight: '600',
    },
});
