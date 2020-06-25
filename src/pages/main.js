import * as React from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

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
  
  const renderItem = ({ item }) => (
      <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>

          <TouchableOpacity onPress={() => {}}>
              <Text>Acessar</Text>
          </TouchableOpacity>

      </View>
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <FlatList 
            data={docs}
            keyExtractor={item => item._id}
            renderItem={renderItem}
        />
      
    </View>
  );
}


export default HomeScreen;

