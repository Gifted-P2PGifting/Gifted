import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedScreen from '../screens/FeedScreen';
import CampaignScreen from '../screens/CampaignScreen';
import ItemScreen from '../screens/ItemScreen';

import {
  BottomTabParamList,
  HomeTabParamList,
  FeedTabParamList,
} from '../types';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({ name, color }: { name: string; color: string }) {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -3 }}
      color={color}
      name={name}
    />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <HomeTabStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerTitle: 'History' }}
      />
      <HomeTabStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </HomeTabStack.Navigator>
  );
}

const FeedTabStack = createStackNavigator<FeedTabParamList>();

function FeedTabNavigator() {
  return (
    <FeedTabStack.Navigator>
      <FeedTabStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerTitle: 'Feed' }}
      />
      <FeedTabStack.Screen
        name="CampaignScreen"
        component={CampaignScreen}
        options={{ headerTitle: 'Campaign' }}
      />
      <FeedTabStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{ headerTitle: 'Item' }}
      />
    </FeedTabStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
