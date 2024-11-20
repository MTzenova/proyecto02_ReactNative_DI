//react es tsx.
import { StyleSheet } from "react-native";
import { Color } from "./Color";

export

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      textoGrande: {
        fontSize: 50,
        color: Color.textPrimary
      },
      boton:{
        backgroundColor: '#00aae4',
        padding: 10,
        borderRadius:10
      },
      botonPulsado:{
        opacity:0.6
      }
})