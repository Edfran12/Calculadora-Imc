import React from "react"
import{Text,Keyboard,Pressable} from "react-native"
import styles from "./style";
export default function Title(){
    return(
    <Pressable onPress={Keyboard.dismiss} style={styles.boxTitle}>
        
        <Text style={styles.textTitle}>ONEBITHEALTH</Text>
       
    </Pressable>
    );
}