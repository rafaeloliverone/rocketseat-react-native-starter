import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/main';
import Product from './src/pages/product';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'JSHunt',
            headerStyle: {
              backgroundColor: '#6a51ae',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: 'Product',
            headerStyle: {
              backgroundColor: '#6a51ae',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;