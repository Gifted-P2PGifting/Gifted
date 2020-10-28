import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import AuthContext from '../hooks/context';
// import AuthNavigator from '../navigation/AuthNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#458b74',
  },
  inputView: {
    width: '75%',
    backgroundColor: '#222222',
    borderRadius: 10,
    height: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#eeeeee',
  },
  loginBtn: {
    backgroundColor: '#458b74',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
});

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setConfirmPassword] = useState('');
  const { signUp } = useContext(AuthContext);
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    console.log('username: ', username);
    console.log('password: ', password);
    console.log('Name: ', firstName);
  }, [username, password, firstName]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.inputView}
        placeholder="First Name"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Username"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.inputView}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.inputView}
        secureTextEntry
        placeholder="Confirm Password"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity
        style={{ ...styles.loginBtn, width: windowWidth - 120 }}
      >
        <Text style={styles.title} onPress={() => signUp()}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
