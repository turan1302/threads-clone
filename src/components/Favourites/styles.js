import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: 18,
        paddingTop: 37,
        marginBottom: 14,
    },
    title: {
        color: COLORS.text,
        fontSize: 28,
        fontWeight: '700',
    },
    filterRow: {
        paddingHorizontal: 18,
        marginBottom: 12,
        gap: 8,
    },
    filterTab: {
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: 'transparent',
    },
    filterTabActive: {
        backgroundColor: COLORS.inputBg,
    },
    filterTabText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.muted,
    },
    filterTabTextActive: {
        color: COLORS.text,
    },
    sectionHeader: {
        paddingHorizontal: 18,
        paddingTop: 16,
        paddingBottom: 8,
    },
    sectionTitle: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: '700',
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
    avatarWrap: {
        marginRight: 12,
    },
    avatar: {
        backgroundColor: COLORS.inputBg,
    },
    badge: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.background,
    },
    itemContent: {
        flex: 1,
    },
    itemTopRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    itemMain: {
        flex: 1,
        paddingRight: 8,
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    username: {
        color: COLORS.text,
        fontSize: 15,
        fontWeight: '600',
    },
    dot: {
        color: COLORS.muted,
        fontSize: 15,
        marginHorizontal: 4,
    },
    timeAgo: {
        color: COLORS.muted,
        fontSize: 15,
    },
    label: {
        color: COLORS.muted,
        fontSize: 14,
        marginTop: 2,
    },
    actionText: {
        color: COLORS.muted,
        fontSize: 14,
        marginTop: 2,
    },
    content: {
        color: COLORS.text,
        fontSize: 15,
        lineHeight: 21,
        marginTop: 4,
    },
    quote: {
        color: COLORS.muted,
        fontSize: 15,
        lineHeight: 21,
        marginTop: 2,
    },
    thumbnail: {
        width: 44,
        height: 44,
        borderRadius: 6,
        backgroundColor: COLORS.inputBg,
    },
    followButton: {
        backgroundColor: COLORS.inputBg,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 7,
        alignSelf: 'center',
    },
    followButtonText: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: '600',
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 18,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    actionCount: {
        color: COLORS.muted,
        fontSize: 13,
    },
});
