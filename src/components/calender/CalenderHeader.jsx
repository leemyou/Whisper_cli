import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Text from '@components/Text';
import {fontStyle} from '../../styles/GlobalStyles';
import moment from 'moment';
import IconBack from '@assets/icons/chevron-back-outline.svg';
import IconForward from '@assets/icons/chevron-forward-outline.svg';

const CalenderHeader = ({yearAndMonth, setYearAndMonth}) => {
  const [year, setYear] = useState(moment(yearAndMonth).format('yyyy'));
  const [month, setMonth] = useState(moment(yearAndMonth).format('MMMM'));

  const handleBtnBack = () => {
    setYearAndMonth(
      moment(yearAndMonth).subtract(1, 'month').format('YYYY-MM'),
    );
  };

  const handleBtnForward = () => {
    setYearAndMonth(moment(yearAndMonth).add(1, 'month').format('YYYY-MM'));
  };

  useEffect(() => {
    setYear(moment(yearAndMonth).format('yyyy'));
    setMonth(moment(yearAndMonth).format('MMMM'));
  }, [yearAndMonth]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconStyle} onPress={handleBtnBack}>
        <IconBack size={30} color={'#000'} />
      </Pressable>
      <View style={styles.pickerContainer}>
        <Text style={fontStyle.font_body}>{year}</Text>
        <Text style={fontStyle.font_title1}>{month}</Text>
      </View>
      <Pressable style={styles.iconStyle} onPress={handleBtnForward}>
        <IconForward size={30} color={'#000'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  iconStyle: {
    width: 40,
    height: 45,
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CalenderHeader;
