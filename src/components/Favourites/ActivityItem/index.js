import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useScreenDimensions from '../../../hooks/useScreenDimensions';
import { COLORS, ACTION_ITEMS } from '../constants';
import ActivityAvatar from '../ActivityAvatar';
import { styles } from '../styles';

const ActivityItem = ({ item }) => {
    const { width } = useScreenDimensions();
    const avatarSize = width * 0.11;

    return (
        <View style={styles.itemRow}>
            <ActivityAvatar size={avatarSize} badgeType={item.badgeType} />

            <View style={styles.itemContent}>
                <View style={styles.itemTopRow}>
                    <View style={styles.itemMain}>
                        <View style={styles.usernameRow}>
                            <Text style={styles.username}>{item.username}</Text>
                            {item.verified && (
                                <Ionicons
                                    name="checkmark-circle"
                                    size={14}
                                    color={COLORS.verified}
                                    style={{ marginLeft: 4 }}
                                />
                            )}
                            <Text style={styles.dot}>·</Text>
                            <Text style={styles.timeAgo}>{item.timeAgo}</Text>
                        </View>

                        {item.label && <Text style={styles.label}>{item.label}</Text>}
                        {item.actionText && (
                            <Text style={styles.actionText}>{item.actionText}</Text>
                        )}
                        {item.content && <Text style={styles.content}>{item.content}</Text>}
                        {item.quote && <Text style={styles.quote}>{item.quote}</Text>}

                        {item.showActions && (
                            <View style={styles.actionsRow}>
                                {ACTION_ITEMS.map(({ key, icon }) => (
                                    <TouchableOpacity
                                        key={key}
                                        style={styles.actionItem}
                                        activeOpacity={0.7}
                                    >
                                        <Ionicons
                                            name={icon}
                                            size={18}
                                            color={COLORS.muted}
                                        />
                                        {item[key] > 0 && (
                                            <Text style={styles.actionCount}>
                                                {item[key]}
                                            </Text>
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>

                    {item.image && (
                        <Image
                            source={item.image}
                            style={styles.thumbnail}
                            resizeMode="cover"
                        />
                    )}

                    {item.type === 'follow' && item.isFollowing && (
                        <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
                            <Text style={styles.followButtonText}>Takiptesin</Text>
                        </TouchableOpacity>
                    )}

                    {item.showMenu && (
                        <TouchableOpacity style={{ paddingTop: 2 }} activeOpacity={0.7}>
                            <Ionicons
                                name="ellipsis-horizontal"
                                size={16}
                                color={COLORS.muted}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

export default ActivityItem;
