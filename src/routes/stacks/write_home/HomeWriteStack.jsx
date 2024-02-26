import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMain from '@screens/home/HomeMain';
import WriteMain from '@screens/write/WriteMain';
import WriteSelect from '@screens/write/WriteSelect';
import WriteMoodResult from '@screens/write/WriteMoodResult';

const Stack = createStackNavigator();

// create a component
const HomeWriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="WriteMain" component={WriteMain} />
      <Stack.Screen name="WriteSelect" component={WriteSelect} />
      <Stack.Screen name="WriteMoodResult" component={WriteMoodResult} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default HomeWriteStack;
