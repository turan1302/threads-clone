import { View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostAvatar = ({ avatarSize, plusBadgeSize, showFollowBadge }) => (
    <View style={{ width: avatarSize, height: avatarSize }}>
        <Image
            source={require('../../../../assets/avatars/default-avatar.png')}
            style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarSize / 2,
            }}
            resizeMode="cover"
        />
        {showFollowBadge && (
            <View
                style={{
                    position: 'absolute',
                    right: -2,
                    bottom: -2,
                    width: plusBadgeSize,
                    height: plusBadgeSize,
                    borderRadius: plusBadgeSize / 2,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: '#000',
                }}
            >
                <Ionicons name="add" size={plusBadgeSize * 0.75} color="#000" />
            </View>
        )}
    </View>
);

export default PostAvatar;
