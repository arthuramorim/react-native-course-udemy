import React, { Component } from 'react'
import { View, Text, StyleSheet } from  'react-native'
import Simples from './componentes/Simples' 
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component{
	
	render( ){
		return(
			<View style={styles.container}>
				<Simples texto='Passando parametros!' />
				<Parimpar numero={1} />
				<Inverter texto={'Arthur Amorim'}/>
				<MegaSena numeros={8}/>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},

	f20: {
		fontSize: 40
	}
})