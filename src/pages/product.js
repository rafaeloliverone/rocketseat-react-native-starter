import * as React from 'react';

import { Text } from 'react-native';
import { WebView } from 'react-native-webview';

const Product = ({ route }) => {
    const { url } = route.params;
    return (
        <WebView
            source={{ uri: url }}
        />
    );
}

export default Product;