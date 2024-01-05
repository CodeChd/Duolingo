import {
    Text,
    View,
    Image
} from 'react-native';
import styles from './styles';


const ImageOption = ({ name, image }: { name: string, image: string }): React.JSX.Element => {
    return (
        <View style={styles.optionContainer}>
            <Image source={{ uri: `${image}` }} style={styles.optionImage} resizeMode='contain' />
            <Text style={styles.optionText}>{name}</Text>
        </View>
    )
}

export default ImageOption