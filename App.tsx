/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import { styles } from './styles';
import ImageOption from './src/components/ImageOption';
import items from './data/items';


function App(): React.JSX.Element {
  const [selected, setIsSelected] = useState(items[0].name)

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        {
          items.map((item) => (
            <ImageOption key={item.name} name={item.name} image={item.image} isSelected={selected === item.name} />
          ))
        }
      </View>

    </View>
  );
}

export default App;
