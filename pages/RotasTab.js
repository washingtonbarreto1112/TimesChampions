import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import Home from "./Home.js";
import Times from './Times.js';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
        name="Home"
        component={Home}
        options = {{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="soccer" color={color} size={size}/>}}
            />

        <Tab.Screen
        name="Times"
        component={Times}
        options = {{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="soccer-field" color={color} size={size}/>}} 
            /> 
    </Tab.Navigator>
  );
}