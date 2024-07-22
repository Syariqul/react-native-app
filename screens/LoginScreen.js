import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.username === username && parsedUser.password === password) {
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Invalid credentials');
        }
      } else {
        Alert.alert('Error', 'No user found. Please sign up first.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.forgotTxt}>Forgot Password?</Text>
      <Pressable style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginTxt}>Login</Text>
      </Pressable>
      <Pressable style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupTxt}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  forgotTxt: {
    marginTop: 2,
    marginBottom: 18,
    fontSize: 12,
    textAlign: 'center'
  },
  signupTxt: {
    marginVertical: 12,
    fontSize: 15,
    textAlign: 'center'
  },
  loginBtn: {
    height: 40,
    width: 280,
    backgroundColor: 'blue',
    marginHorizontal: 'auto',
    borderRadius: 10,
    justifyContent: 'center'
  },
  loginTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupBtn: {
    paddingHorizontal: 12,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 280,
    marginHorizontal: 'auto',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
});

export default LoginScreen;