//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text';

// create a component
const ListMain = () => {
  return (
    <View style={styles.container}>
      <Text>ListMain</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ListMain;
