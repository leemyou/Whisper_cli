import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const Text = props => {
  return <RNText {...props} style={[styles.defaultFont, props.style]} />;
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'EF_Diary',
  },
});

export default Text;
