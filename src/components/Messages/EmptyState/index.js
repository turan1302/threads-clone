import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AVATAR_CLUSTER } from '../constants';
import { styles } from '../styles';

const EmptyState = () => (
    <View style={styles.emptyState}>
        <View style={styles.avatarCluster}>
            <View style={styles.chatBubble}>
                <Ionicons name="chatbubble-ellipses" size={28} color="#3a3a3a" />
            </View>

            {AVATAR_CLUSTER.map((avatar, index) => (
                <View
                    key={index}
                    style={[
                        styles.clusterAvatar,
                        {
                            width: avatar.size,
                            height: avatar.size,
                            borderRadius: avatar.size / 2,
                            top: avatar.top,
                            left: avatar.left,
                            right: avatar.right,
                            backgroundColor: avatar.color,
                        },
                    ]}
                >
                    <Image
                        source={require('../../../../assets/avatars/default-avatar.png')}
                        style={{
                            width: avatar.size,
                            height: avatar.size,
                            borderRadius: avatar.size / 2,
                        }}
                        resizeMode="cover"
                    />
                </View>
            ))}

            <View style={styles.centerAvatar}>
                <Image
                    source={require('../../../../assets/avatars/default-avatar.png')}
                    style={{ width: 46, height: 46, borderRadius: 23 }}
                    resizeMode="cover"
                />
            </View>
        </View>

        <Text style={styles.emptyTitle}>Doğrudan mesajlarda gerçekçi ol</Text>
        <Text style={styles.emptySubtitle}>
            Bir yan konuşma başlat, yazışmalar gönder ve daha fazlasını yap.
        </Text>

        <TouchableOpacity style={styles.messageButton} activeOpacity={0.8}>
            <Text style={styles.messageButtonText}>Mesaj</Text>
        </TouchableOpacity>
    </View>
);

export default EmptyState;
