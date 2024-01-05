/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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


const images = [
  { image: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png", name: "Cup" },
  { image: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png", name: "Glass" },
  { image: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png", name: "Milk" },
  { image: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png", name: "Coffe" }
]


function App(): React.JSX.Element {

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        {
          images.map((item) => (
            <ImageOption key={item.name} name={item.name} image={item.image} />
          ))
        }
      </View>

    </View>
  );
}

export default App;
