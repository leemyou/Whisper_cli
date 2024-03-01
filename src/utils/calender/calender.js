import moment from 'moment';

/**
 *  배열을 size씩 잘라주는 함수
 * @param {Array} data
 * @param {Number} size
 * @returns Array
 */
const division = (data = [], size = 1) => {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  while (arr.slice(-1)[0].length !== 7) {
    arr.slice(-1)[0].push('');
  }

  return arr;
};

/**
 * 인자로 들어온 월의 날짜를 배열로 출력해주는 함수
 * @param {string} yearAndMonth 'yyyy-MM'
 * @returns 날짜배열
 */
export const getCalender = yearAndMonth => {
  const firstDayOfMonth = moment(yearAndMonth).startOf('month').day(); // 월의 첫번째 날의 요일
  console.log(yearAndMonth);
  const dayLengthOfMonth = moment(yearAndMonth).daysInMonth(); // 월의 마지막 날짜

  // 저번달 날짜 만큼 비어있는 날짜 앞쪽으로 추가
  const dayArr = Array.from({length: dayLengthOfMonth}, (v, i) => i + 1);
  for (let i = 0; i < firstDayOfMonth; i++) {
    dayArr.unshift('');
  }

  // 7일씩 나눠주고 리턴
  return division(dayArr, 7);
};
