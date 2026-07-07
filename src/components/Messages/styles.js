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
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingTop: 37,
        marginBottom: 14,
    },
    title: {
        color: COLORS.text,
        fontSize: 28,
        fontWeight: '700',
    },
    searchBar: {
        backgroundColor: COLORS.inputBg,
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 44,
        marginHorizontal: 18,
        marginBottom: 12,
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
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginBottom: 8,
        gap: 8,
    },
    filterIconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.inputBg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterTab: {
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
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
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingBottom: 40,
    },
    avatarCluster: {
        width: 160,
        height: 120,
        marginBottom: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatBubble: {
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        zIndex: 2,
    },
    clusterAvatar: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: COLORS.background,
        overflow: 'hidden',
    },
    centerAvatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: COLORS.inputBg,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.background,
        zIndex: 1,
    },
    emptyTitle: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
    },
    emptySubtitle: {
        color: COLORS.muted,
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 21,
        marginBottom: 24,
    },
    messageButton: {
        backgroundColor: COLORS.text,
        borderRadius: 22,
        paddingHorizontal: 28,
        paddingVertical: 12,
    },
    messageButtonText: {
        color: COLORS.background,
        fontSize: 15,
        fontWeight: '700',
    },
});
