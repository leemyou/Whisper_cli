import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Text from '../../components/Text';

const SearchResult = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SearchResult</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchResult;
