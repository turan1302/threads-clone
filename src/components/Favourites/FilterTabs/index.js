import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { ACTIVITY_FILTERS } from '../../../assets/consts/activities';
import { styles } from '../styles';

const FilterTabs = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
        >
            {ACTIVITY_FILTERS.map(tab => {
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
        </ScrollView>
    );
};

export default FilterTabs;
