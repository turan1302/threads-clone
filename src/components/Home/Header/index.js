import { View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

const Header = ({ logoSize, onSearchPress, onMenuPress }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 37,
        paddingBottom: 10,
    }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onMenuPress}>
            <Ionicons name="menu" size={25} color={COLORS.muted} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={require('../../../../assets/logo/threads-logo-white.png')}
                style={{
                    width: logoSize,
                    height: logoSize,
                    backgroundColor: 'transparent',
                }}
                resizeMode="contain"
            />
        </View>
        <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={onSearchPress}
        >
            <Ionicons name="search" size={25} color={COLORS.muted} />
        </TouchableOpacity>
    </View>
);

export default Header;
