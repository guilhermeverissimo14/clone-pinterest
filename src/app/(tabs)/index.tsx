import { theme } from '@/theme';
import { View, StyleSheet, Text } from 'react-native';

import { Filters } from '@/components/Filters';
import { FILTERS } from '@/utils/filter';
import { useState } from 'react';

export default function Home() {
    const [filter, setfilter] = useState(FILTERS[0])


    return (
        <View style={styles.container}>
            <Filters filters={FILTERS} filter={filter} onChange={setfilter} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
        padding: 12,
        paddingTop: 52
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold,
    }
});