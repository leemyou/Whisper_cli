import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingMain from '../screen/setting/SettingMain';
import MoodTrackerMain from '../screen/moodTracker/MoodTrackerMain';
import ListMain from '../screen/list/ListMain';
import SearchStack from './stacks/search/SearchStack';
import HomeWriteStack from './stacks/write_home/HomeWriteStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen name="MoodTracker" component={MoodTrackerMain} />
      <Tab.Screen name="List" component={ListMain} />
      <Tab.Screen name="Home" component={HomeWriteStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Setting" component={SettingMain} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
