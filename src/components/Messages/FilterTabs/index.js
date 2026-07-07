import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FILTER_TABS } from '../constants';
import { styles } from '../styles';

const FilterTabs = () => {
    const [activeTab, setActiveTab] = useState('inbox');

    return (
        <View style={styles.filterRow}>
            <TouchableOpacity style={styles.filterIconButton} activeOpacity={0.7}>
                <Ionicons name="options-outline" size={18} color={COLORS.text} />
            </TouchableOpacity>

            {FILTER_TABS.map(tab => {
                const isActive = activeTab === tab.id;

                return (
                    <TouchableOpacity
                        key={tab.id}
                        style={[styles.filterTab, isActive && styles.filterTabActive]}
                        onPress={() => setActiveTab(tab.id)}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.filterTabText,
                                isActive && styles.filterTabTextActive,
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default FilterTabs;
