import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import CreateProduct from './screens/CreateProduct';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Creación de Producto" component={CreateProduct} />
      <Stack.Screen name="Listado de Producto" component={ProductList} />
      <Stack.Screen name="Detalle de Producto" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
