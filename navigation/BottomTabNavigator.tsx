import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RequestScreen from '../screens/RequestScreen';
import CampaignScreen from '../screens/CampaignScreen';
import ItemScreen from '../screens/ItemScreen';
import ViewCampaign from '../screens/ViewCampaign';

import {
  BottomTabParamList,
  HomeTabParamList,
  RequestTabParamList,
  ViewCampaignParamList,
} from '../types';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <HomeTabStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitle: 'History',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <HomeTabStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
    </HomeTabStack.Navigator>
  );
}

const RequestTabStack = createStackNavigator<RequestTabParamList>();

function RequestTabNavigator() {
  return (
    <RequestTabStack.Navigator>
      <RequestTabStack.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{
          headerTitle: 'Request',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <RequestTabStack.Screen
        name="CampaignScreen"
        component={CampaignScreen}
        options={{
          headerTitle: 'Campaign',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <RequestTabStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{
          headerTitle: 'Item',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
    </RequestTabStack.Navigator>
  );
}

const ViewCampaignStack = createStackNavigator<ViewCampaignParamList>();

function ViewCampaignNavigator() {
  return (
    <ViewCampaignStack.Navigator>
      <ViewCampaignStack.Screen
        name="ViewCampaign"
        component={ViewCampaign}
        options={{
          headerTitle: 'View',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
    </ViewCampaignStack.Navigator>
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
            <AntDesign
              name="home"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={RequestTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="form"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="View"
        component={ViewCampaignNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="eye"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
