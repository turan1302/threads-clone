import { View } from 'react-native';
import { Header, SearchBar, FilterTabs, EmptyState, styles } from '../../components/Messages';

const Messages = () => {
    return (
        <View style={styles.screen}>
            <Header />
            <SearchBar />
            <FilterTabs />
            <EmptyState />
        </View>
    );
};

export default Messages;
