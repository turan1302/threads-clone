import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useScreenDimensions from '../../../hooks/useScreenDimensions';
import { COLORS, getHomeSizes } from '../constants';
import PostAvatar from '../PostAvatar';
import PostActions from '../PostActions';

const PostItem = ({ post }) => {
    const { width } = useScreenDimensions();
    const { avatarSize, plusBadgeSize, actionIconSize, postImageHeight } = getHomeSizes(width);

    return (
        <View style={{
            backgroundColor: COLORS.background,
            paddingHorizontal: 18,
            paddingBottom: 16,
            borderBottomWidth: 0.4,
            borderBottomColor: COLORS.border,
        }}>
            <View style={{ flexDirection: 'row' }}>
                <PostAvatar
                    avatarSize={avatarSize}
                    plusBadgeSize={plusBadgeSize}
                    showFollowBadge={post.showFollowBadge}
                />

                <View style={{ flex: 1, marginLeft: 12 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '600' }}>
                                {post.username}
                            </Text>
                            <Text style={{ color: COLORS.muted, fontSize: 15, marginHorizontal: 4 }}>
                                ·
                            </Text>
                            <Text style={{ color: COLORS.muted, fontSize: 15 }}>
                                {post.timeAgo}
                            </Text>
                        </View>
                        <TouchableOpacity style={{ paddingLeft: 8 }}>
                            <Ionicons name="ellipsis-horizontal" size={15} color={COLORS.muted} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        color: COLORS.text,
                        fontSize: 15,
                        lineHeight: 21,
                        marginTop: 6,
                    }}>
                        {post.content}
                    </Text>

                    {post.image && (
                        <Image
                            source={post.image}
                            style={{
                                width: '100%',
                                height: postImageHeight,
                                borderRadius: 8,
                                marginTop: 10,
                            }}
                            resizeMode="cover"
                        />
                    )}

                    <PostActions post={post} actionIconSize={actionIconSize} />
                </View>
            </View>
        </View>
    );
};

export default PostItem;
