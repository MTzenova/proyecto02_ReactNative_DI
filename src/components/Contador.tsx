import React from 'react'
import { Pressable, Text, StyleSheet, onPress } from 'react-native';
import { useState } from 'react';


interface Props{
    label: string;
    onPress?:() => void;
    onLongPress?:() => void;
}

export const Contador = ({label, onPress, onLongPress}:Props) => {
    const[contador, setContador] = useState(10);
    return (
          <Pressable style={styles.boton}
            onPress={onPress}
            onLongPress={onLongPress}>
            
            <Text style={[{color:'#fff'},{fontWeight:400}]}>{label}</Text>
          </Pressable>
    );
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#00aae4',
        padding: 10,
        borderRadius:10
      }
    });