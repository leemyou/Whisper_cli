import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, ImageBackground} from 'react-native';
import Text from '@components/Text';
import {getCalender} from '../../utils/calender/calender';
import {fontStyle} from '../../styles/GlobalStyles';

const CalenderBody = ({yearAndMonth}) => {
  const [totalDays, setTotalDays] = useState([]);

  const testImg = {
    uri: 'https://images.unsplash.com/photo-1709125505234-2fa309a7fb5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    // uri: '',
  };

  useEffect(() => {
    setTotalDays(getCalender(yearAndMonth));
  }, [yearAndMonth]);

  return (
    <View style={styles.container}>
      {totalDays.map((week, index) => (
        <View key={index} style={styles.weekWrap}>
          {week.map((day, index) => (
            <Pressable
              key={index}
              style={styles.dayBtnWrap}
              onPress={() => {
                if (day !== '') {
                  // TODO : 일기가 있을 때 없을 때 구분해야함.
                  alert('일기 없음!');
                }
              }}>
              <ImageBackground
                source={testImg}
                style={[
                  styles.imgBackground,
                  day === '' ? {opacity: 0} : {opacity: 1},
                ]}
                resizeMode="cover">
                {day === '' ? (
                  <View style={{backgroundColor: '#00000000'}} />
                ) : (
                  <Text
                    style={[
                      styles.textBox,
                      textStyle(index).dayColor,
                      fontStyle.font_body,
                    ]}>
                    {day}
                  </Text>
                )}
              </ImageBackground>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
  },
  weekWrap: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginVertical: 3,
    justifyContent: 'space-between',
  },
  dayBtnWrap: {
    width: '12%',
    height: 60,
    alignItems: 'center',
    borderRadius: 11,
    overflow: 'hidden',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  textBox: {
    backgroundColor: '#D3D5DA80',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: 60,
  },
});

const textStyle = index =>
  StyleSheet.create({
    dayColor: {
      color: index === 0 ? 'red' : index === 6 ? 'blue' : 'black',
    },
  });

//make this component available to the app
export default CalenderBody;
