import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

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
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="History"
        onPress={() => navigation.navigate('HistoryScreen')}
      />
      <View style={styles.separator} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
}
