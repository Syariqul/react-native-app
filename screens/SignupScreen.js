// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
      Alert.alert('Success', 'User registered successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.signupBtn} onPress={handleSignup}>
        <Text style={styles.signupTxt}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
    marginHorizontal: 'auto',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom:4
  },
  input: {
    height: 40,
    width: 280,
    marginHorizontal: 'auto',
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  signupBtn: {
    height: 36,
    width: 280,
    backgroundColor: 'blue',
    marginHorizontal: 'auto',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center'
  },
  signupTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default SignupScreen;