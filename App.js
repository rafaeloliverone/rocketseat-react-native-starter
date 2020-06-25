import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import api from './src/services/api';

function HomeScreen() {
  const [docs, setDocs] = React.useState([]);

  React.useEffect(() => {
    loadProducts();
  }, []);
    
  const loadProducts =  async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    setDocs(docs);
  }
  
  console.log(docs);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      {docs.map( product => (
        <Text key={product._id}>{product.title}</Text>
      ))}
    </View>
  );
}

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
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
