import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
  btn: {
    backgroundColor: '#458b74',
    borderRadius: 10,
    height: 40,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
  },
});

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('HistoryScreen')}
        >
          History
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('HistoryScreen')}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.title} onPress={() => signOut()}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
