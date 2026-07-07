import { View, FlatList } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import { POSTS } from '../../assets/consts/posts';
import { Header, PostItem, COLORS, getHomeSizes } from '../../components/Home';

const Home = () => {
    const navigation = useNavigation();
    const { width } = useScreenDimensions();
    const { logoSize } = getHomeSizes(width);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Header
                logoSize={logoSize}
                onSearchPress={() => navigation.navigate('Search')}
                onMenuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />

            <FlatList
                data={POSTS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PostItem post={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20 }}
            />
        </View>
    );
};

export default Home;
