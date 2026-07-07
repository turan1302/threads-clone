import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';
import { styles } from '../styles';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.title}>Mesajlar</Text>
        <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="create-outline" size={26} color={COLORS.text} />
        </TouchableOpacity>
    </View>
);

export default Header;
