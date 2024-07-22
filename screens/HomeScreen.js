import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageCarousel from '../components/ImageCarousel';

const HomeScreen = ({navigation}) => {

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      Alert.alert('Success', 'Logged out successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      console.error('Logout Error: ', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageCarousel />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text>This Mobile App is using a React Native framework and its related libraries.</Text>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutTxt}>Log Out</Text>
        </Pressable>
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
  logoutBtn: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    borderRadius: 6,
    backgroundColor: 'gray'
  },
  logoutTxt: {
    fontSize: 16,
    padding: 6,
  }
});

export default HomeScreen;