import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

interface ImageGridProps {
    images: string[];
}

const numColumns = 3;
const spacing = 2;
const screenWidth = Dimensions.get('window').width;
const imageSize = (screenWidth - spacing * (numColumns - 1)) / numColumns;

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <FlatList
            data={images}
            keyExtractor={(_, idx) => idx.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item }} style={styles.image} />
                </View>
            )}
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        margin: -spacing / 2,
    },
    imageContainer: {
        width: imageSize,
        height: imageSize,
        margin: spacing / 2,
        backgroundColor: '#eee',
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
});

export default ImageGrid;