import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageCarousel />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text>This Mobile App is using a React Native framework and its related libraries.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 14,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
});

export default HomeScreen;