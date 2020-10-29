import * as React from 'react';
import { Text, View } from 'react-native';

// for user info (payments, address, etc), put in front end first and hard code data
export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Text>Settings</Text>
    </View>
  );
}
