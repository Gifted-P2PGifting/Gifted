import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

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

export default function FeedScreen({ navigation }) {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Feed</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   <EditScreenInfo path="/screens/FeedScreen.js" />
    // </View>
    <View style={styles.container}>
      <Button
        title="Campaign"
        onPress={() => navigation.navigate('CampaignScreen')}
      />
      <View style={styles.separator} />
      <Button title="Item" onPress={() => navigation.navigate('ItemScreen')} />
    </View>
  );
}
