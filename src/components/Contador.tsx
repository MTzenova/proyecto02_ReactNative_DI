import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';


interface Props{
    label: string;
    onPress?:() => void;
    onLongPress?:() => void;
}

export const Contador = ({label, onPress, onLongPress}:Props) => {
    return (
          <Pressable style={styles.boton}
            onPress={onPress}
            onLongPress={onLongPress}>
            
            <Text style={[{color:'#fff'},{fontWeight:400}]}>{label}</Text>
          </Pressable>
    );
}

/*const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#00aae4',
        padding: 10,
        borderRadius:10
      }
    });*/