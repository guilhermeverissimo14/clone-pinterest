import { Image, ImageProps } from "react-native";

import { styles } from "./styles";
import { AvatarProps } from "./avatar";


export default function Avatar({selected, ...source}:AvatarProps & ImageProps){
    return(
        <Image style={[styles.image, selected && styles.selected]} {...source}/>
    )
}