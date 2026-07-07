import { View, SectionList, Text } from 'react-native';
import { ACTIVITY_SECTIONS } from '../../assets/consts/activities';
import { Header, FilterTabs, ActivityItem, styles } from '../../components/Favourites';

const Favourites = () => {
    return (
        <View style={styles.screen}>
            <Header />
            <FilterTabs />

            <SectionList
                sections={ACTIVITY_SECTIONS}
                keyExtractor={item => item.id}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => <ActivityItem item={item} />}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
            />
        </View>
    );
};

export default Favourites;
