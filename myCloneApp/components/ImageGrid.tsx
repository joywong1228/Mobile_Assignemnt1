import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const numColumns = 3;
const imageMargin = 1;
const imageSize = (Dimensions.get('window').width / numColumns) - (imageMargin * 2);

const images = [
    require('../assets/1.jpg'),
    require('../assets/2.jpeg'),
    require('../assets/3.jpg'),
    require('../assets/4.jpg'),
    require('../assets/5.jpg'),
    require('../assets/6.jpg'),
    require('../assets/7.jpg'),
    require('../assets/8.jpg'),
    require('../assets/9.jpg'),
    require('../assets/10.jpg')
];

const ImageGrid: React.FC = () => {
    return (
        <View style={styles.container}>
            {images.map((img, idx) => (
                <Image
                    key={idx}
                    source={img}
                    style={styles.image}
                    resizeMode="cover"
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
    },
    image: {
        width: imageSize,
        height: imageSize,
        margin: imageMargin,
    },
});

export default ImageGrid;