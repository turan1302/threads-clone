import { View, FlatList } from 'react-native';
import { SEARCH_USERS } from '../../assets/consts/searchUsers';
import { Header, SearchBar, UserItem, styles } from '../../components/Search';

const Search = () => {
    return (
        <View style={styles.screen}>
            <Header />
            <SearchBar />

            <FlatList
                data={SEARCH_USERS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <UserItem user={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Search;
