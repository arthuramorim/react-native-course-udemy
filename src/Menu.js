import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples' 
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default createDrawerNavigator({

    MegaSena:  {
        screen:() => <MegaSena numero={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },

    Inverter: {
        screen:() => <Inverter texto={ 'Texto Invertido' } />,
        navigationOptions: { title: 'Inverter' }
    },

    Parimpar: {
        screen: () => <Parimpar numero={23} />,
        navigationOptions: { title: 'Par ou Impar' }
    },

    Simples: {
        screen: () => <Simples texto={'Passando parametros'}/>,
        navigationOptions: { title: 'Simples' }
    }
 
}, { drawerWidth: 300 })