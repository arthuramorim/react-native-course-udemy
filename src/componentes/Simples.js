import React from 'react'
import { Text, StyleSheet } from 'react-native'
import  Padrao from '../estilo/Padrao'

/* export default function(props){
    return <Text style={styles.texto}>{ props.texto}</Text>
} */


//Arrow functions
export default props => 
    <Text style={Padrao.ex}>Arrow Function: { props.texto }</Text>


const styles = StyleSheet.create({
    texto:{
        fontSize: 40
    }
})