import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validUsername = 'Test';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials');
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
      <Text style={styles.signupTxt}>SignUp</Text>
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
    marginVertical: 18,
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
  title: {
    fontSize: 24,
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