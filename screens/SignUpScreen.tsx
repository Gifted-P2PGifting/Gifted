import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
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
  btn: {
    backgroundColor: '#458b74',
    borderRadius: 10,
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
});

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AntDesign name="gift" size={50} />
      <Text style={styles.title}>Sign Up</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        value={email}
        style={styles.inputView}
        placeholder="Email"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={username}
        style={styles.inputView}
        placeholder="Username"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={password}
        style={styles.inputView}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        value={confirmPassword}
        style={styles.inputView}
        secureTextEntry
        placeholder="Confirm Password"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.title}
          onPress={() => {
            signUp(email, username, password, confirmPassword);
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
