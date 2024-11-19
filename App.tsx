import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

//import { Saludo } from './src/components/Saludo';
import { Contador } from './src/components/Contador';

export default function App() {

  const[contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>{contador}</Text>
      <Contador label = 'Incrementar' onPress={() => setContador(contador+1)} onLongPress={() => setContador(0)}/>
      <StatusBar style="auto" />
    </View>
  );

  /*return (
    <View style={styles.container}>
      <Saludo nombre='Vecinito' tamanio={30}/>
      <StatusBar style="auto" />
    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoGrande: {
    fontSize: 50,
  },
});
