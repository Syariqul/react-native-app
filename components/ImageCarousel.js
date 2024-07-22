import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  require('../assets/img/banner1.jpg'),
  require('../assets/img/banner2.jpg'),
  require('../assets/img/banner3.jpg'),
];

const ImageCarousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay
        loop
        showsPagination={true}
        paginationStyle={styles.pagination}
        activeDotColor="tomato"
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  pagination: {
    bottom: 10,
  },
});

export default ImageCarousel;