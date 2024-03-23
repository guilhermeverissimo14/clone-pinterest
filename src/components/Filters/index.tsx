import { FlatList } from "react-native-gesture-handler";

import { Filter } from "../Filter";
import { styles } from "./styles";
import { FilterProps } from "./filters";

export function Filters({filters, filter, onChange}:FilterProps){
    return(
       <FlatList 
       data={filters}
       keyExtractor={item => item}
       renderItem={({item}) => 
       <Filter
        filter={item}
        selected={item ===filter}
        onPress={() =>onChange(item)}
        />
    }
        horizontal
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
       /> 
    )
}