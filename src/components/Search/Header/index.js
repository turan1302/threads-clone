import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';
import { styles } from '../styles';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color={COLORS.text} />
            </TouchableOpacity>
            <Text style={styles.title}>Ara</Text>
        </View>
    );
};

export default Header;
