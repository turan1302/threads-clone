import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useScreenDimensions from '../../../hooks/useScreenDimensions';
import { COLORS } from '../constants';
import { styles } from '../styles';

const UserItem = ({ user }) => {
    const { width } = useScreenDimensions();
    const avatarSize = width * 0.12;

    return (
        <View style={styles.userRow}>
            <Image
                source={require('../../../../assets/avatars/default-avatar.png')}
                style={[
                    styles.avatar,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize / 2,
                    },
                ]}
                resizeMode="cover"
            />

            <View style={styles.userInfo}>
                <View style={styles.usernameRow}>
                    <Text style={styles.username}>{user.username}</Text>
                    {user.verified && (
                        <Ionicons
                            name="checkmark-circle"
                            size={14}
                            color={COLORS.verified}
                            style={{ marginLeft: 4 }}
                        />
                    )}
                </View>
                <Text style={styles.fullName}>{user.fullName}</Text>
                <Text style={styles.followers}>{user.followers}</Text>
            </View>

            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Takip Et</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserItem;
