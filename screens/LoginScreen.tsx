import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import AuthContext from '../hooks/context';

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
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  signUp: {
    marginTop: 40,
  },
});

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AntDesign name="gift" size={50} />
      <Text style={styles.title}>Log In</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.title}
          onPress={() => {
            logIn(username, password);
            setUsername('');
            setPassword('');
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.signUp}>
          <Text onPress={() => navigation.push('SignUp')}>
            No Account? Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
