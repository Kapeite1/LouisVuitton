import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackHome(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{
          title: 'LOUIS VUITTON',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

export default function Router() {
 return (
   <NavigationContainer>
     <Tab.Navigator>

       <Tab.Screen
        name="Home"
        component={StackHome}
       />

       <Tab.Screen
        name="Buscador"
        component={Home}
       />

       <Tab.Screen
        name="Catálogo"
        component={Home}
       />

       <Tab.Screen
        name="Magazine"
        component={Home}
       />

       <Tab.Screen
        name="Conectividade"
        component={Home}
       />

     </Tab.Navigator>
   </NavigationContainer>
  );
}