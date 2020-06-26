import * as React from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

function HomeScreen() {
  const [allDocs, setAllDocs] = React.useState([]);
  const [productInfo, setProductInfo] = React.useState([]);
  const [page, setPages] = React.useState(1);

  React.useEffect(() => {
    loadProducts();
  }, []);

  
  const loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;
    const resultDocs = [...allDocs, ...docs];
    console.log('inside LoadProduct');
    setAllDocs(resultDocs);
    setProductInfo(productInfo);
    setPages(page);

  }

  console.log(allDocs);

  
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => { }}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>

    </View>
  )


  const loadMore = () => {
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    loadProducts(pageNumber);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <FlatList
        contentContainerStyle={styles.list}
        data={allDocs}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },

  list: {
    padding: 20,
  },

  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },

  productDescription: {
    fontSize: 15,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  productButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: '#6a51ae',
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5

  },

  productButtonText: {
    color: '#6a51ae'
  }

});

export default HomeScreen;


