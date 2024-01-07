import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from './styles';


const ImageOption = ({ name, image, isSelected = false }: { name: string, image: string, isSelected: boolean }): React.JSX.Element => {
    return (
        <View style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
            <Image source={{ uri: image }} style={styles.optionImage} resizeMode='contain' />
            <Text style={isSelected ? styles.selectedText : styles.optionText}>{name}</Text>
        </View>
    )
}

export default ImageOption