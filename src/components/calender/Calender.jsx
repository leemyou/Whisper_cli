import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '@components/Text';
import moment from 'moment';
import CalenderBody from './CalenderBody';
import CalenderHeader from './CalenderHeader';

const Calender = () => {
  const now = moment().format('yyyy-MM');
  const [currentMonth, setCurrentMonth] = useState(now);

  console.log('currentMonth :', currentMonth);

  const [testMonth, setTestMonth] = useState(
    moment('2024-03').format('yyyy-MM'),
  );

  return (
    <View style={styles.container}>
      <CalenderHeader
        yearAndMonth={currentMonth}
        setYearAndMonth={setCurrentMonth}
      />
      <CalenderBody yearAndMonth={currentMonth} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Calender;
