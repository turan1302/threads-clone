import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

const ACTION_ITEMS = [
    { key: 'likes', icon: 'heart-outline' },
    { key: 'comments', icon: 'chatbubble-outline' },
    { key: 'reposts', icon: 'repeat-outline' },
    { key: 'sends', icon: 'paper-plane-outline' },
];

const PostActions = ({ post, actionIconSize }) => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        gap: 18,
    }}>
        {ACTION_ITEMS.map(({ key, icon }) => (
            <TouchableOpacity
                key={key}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
                <Ionicons name={icon} size={actionIconSize} color={COLORS.muted} />
                <Text style={{ color: COLORS.muted, fontSize: 13 }}>{post[key]}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

export default PostActions;
