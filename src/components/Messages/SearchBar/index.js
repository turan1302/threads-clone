import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';
import { styles } from '../styles';

const SearchBar = () => (
    <View style={styles.searchBar}>
        <View style={styles.searchBarRow}>
            <Ionicons
                name="search"
                size={18}
                color={COLORS.muted}
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Ara"
                placeholderTextColor={COLORS.muted}
                underlineColorAndroid="transparent"
                includeFontPadding={false}
            />
        </View>
    </View>
);

export default SearchBar;
