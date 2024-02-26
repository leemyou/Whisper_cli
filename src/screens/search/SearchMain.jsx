//import liraries
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Text from '../../components/Text';

// create a component
const SearchMain = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SearchMain</Text>
      <Button
        title="Test"
        onPress={() => navigation.navigate('SearchResult')}
      />
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
export default SearchMain;
