//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text';
import Calender from '../../components/calender/Calender';
import {screenStyle} from '../../styles/GlobalStyles';

// create a component
const HomeMain = () => {
  return (
    <View style={screenStyle}>
      <Calender />
    </View>
  );
};

export default HomeMain;
