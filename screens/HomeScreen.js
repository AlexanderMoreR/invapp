import React from 'react';
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateProduct from '../screens/CreateProduct';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen  name="Creación de Producto" component={CreateProduct} />
      </Stack.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeScreen = () =>{
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Bienvenido" component={MyStack} />
        </HomeStack.Navigator>
    )
}

export default HomeScreen