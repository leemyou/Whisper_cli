import React from 'react';
import SearchMain from '../../../screen/search/SearchMain';
import SearchResult from '../../../screen/search/SearchResult';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchMain" component={SearchMain} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
    </Stack.Navigator>
  );
};

export default SearchStack;
