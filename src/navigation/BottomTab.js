import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const BottomTab = () =>{
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Inicio" component={ HomeScreen } />
        </Tab.Navigator>
    )
}

export default BottomTab