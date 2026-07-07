import { View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BADGE_CONFIG } from '../constants';
import { styles } from '../styles';

const ActivityAvatar = ({ size, badgeType }) => {
    const badge = badgeType ? BADGE_CONFIG[badgeType] : null;

    return (
        <View style={[styles.avatarWrap, { width: size, height: size }]}>
            <Image
                source={require('../../../../assets/avatars/default-avatar.png')}
                style={[
                    styles.avatar,
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                    },
                ]}
                resizeMode="cover"
            />
            {badge && (
                <View style={[styles.badge, { backgroundColor: badge.color }]}>
                    <Ionicons name={badge.icon} size={10} color="#fff" />
                </View>
            )}
        </View>
    );
};

export default ActivityAvatar;
