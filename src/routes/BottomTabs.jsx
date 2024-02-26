import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingMain from '@screens/setting/SettingMain';
import MoodTrackerMain from '@screens/moodTracker/MoodTrackerMain';
import ListMain from '@screens/list/ListMain';
import SearchStack from './stacks/search/SearchStack';
import HomeWriteStack from './stacks/write_home/HomeWriteStack';
import IconHome from '@assets/icons/home-outline.svg';
import IconMood from '@assets/icons/analytics-outline.svg';
import IconList from '@assets/icons/list-outline.svg';
import IconSearch from '@assets/icons/search-outline.svg';
import IconSetting from '@assets/icons/settings-outline.svg';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#9A75BC',
        tabBarShowLabel: false,
        headerShown: false,
        headerStatusBarHeight: 200,
        tabBarStyle: {
          height: 50,
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
      }}>
      <Tab.Screen
        name="MoodTracker"
        component={MoodTrackerMain}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMood name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListMain}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconList name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeWriteStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconHome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconSearch name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingMain}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconSetting name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
