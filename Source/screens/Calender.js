import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';

const DatesReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      let arr = state;
      let d = action.payload.id;
      let floorValue = Math.floor(d / 7);
      let ceilValue = Math.ceil(d / 7);
      // for (let i = 7 * floorValue + 1; i <= 7 * ceilValue; i++) {
      //   let obj = action.allDates.find(item => item.id == i);
      //   let newArr = arr.find(
      //     item =>
      //       item.num == obj.num &&
      //       item.month == obj.month &&
      //       item.year == obj.year,
      //   );
      //   if (newArr == undefined) {
      //     arr.push(obj);
      //   } else {
      //     const modfifiedArr = arr.filter(item => {
      //       return (
      //         item.num != obj.num &&
      //         item.month != obj.month &&
      //         item.year != obj.year
      //       );
      //     });
      //     return [...modfifiedArr];
      //   }
      //   // arr.push(obj);
      // }
      for (let i = 7 * floorValue + 1; i <= 7 * ceilValue; i++) {
        let newArr = [];
        let obj = action.allDates.filter(item => item.id == i);
        console.log(obj);
        newArr = arr.find(
          item =>
            item.num == obj.num &&
            item.month == obj.month &&
            item.year == obj.year,
        );
        console.log(newArr);
        if (newArr == undefined) {
          arr.push(obj);
        } else {
          const modfifiedArr = arr.filter(
            item =>
              item.num != obj.num &&
              item.month != obj.month &&
              item.year != obj.year,
          );
        }
        // arr.push(obj);
      }
      return [...arr];
    }
  }
};

const Calender = () => {
  const date = new Date();

  date.setDate(1);
  const [month, setDisplayMonth] = useState(date.getMonth());
  console.log(month);
  date.setMonth(month);
  const [year, setDisplayYear] = useState(date.getFullYear());
  date.setFullYear(year);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  const prevlastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0,
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDay();
  const nextDays = 7 - lastDayIndex;

  // console.log(lastDayIndex);
  const allDates = [];
  const firstDayIndex = date.getDay();

  const [selectedDates, dispatch] = useReducer(DatesReducer, []);
  console.log(selectedDates);

  return (
    <View style={styles.container}>
      <View style={styles.calender}>
        <View style={styles.calenderSubContainer}>
          <View style={styles.icon}>
            <Icon
              style={styles.icon1}
              name="calendar-day"
              size={25}
              color="black"
            />
          </View>

          <Text style={styles.calenderMonth}>
            {`${months[month]} , ${year}`}
          </Text>

          <Text style={styles.calenderDate}>{date.toDateString()}</Text>
          <View style={styles.daysName}>
            <Text style={{fontSize: 16}}>Mon</Text>
            <Text style={{fontSize: 16}}>Tue</Text>
            <Text style={{fontSize: 16}}>Wed</Text>
            <Text style={{fontSize: 16}}>Thu</Text>
            <Text style={{fontSize: 16}}>Fri</Text>
            <Text style={{fontSize: 16}}>Sat</Text>
            <Text style={{fontSize: 16}}>Sun</Text>
          </View>
          <View style={styles.days}>
            {(() => {
              let identifier = 1;
              for (let i = firstDayIndex; i > 0; i--) {
                allDates.push({
                  num: prevlastDay + 1 - i,
                  id: identifier,
                  month: parseInt(month) - 1,
                  year: month == 0 ? year - 1 : year,
                });
                identifier++;
              }
              for (let i = 1; i <= lastDay; i++) {
                allDates.push({
                  num: i,
                  id: identifier,
                  month: month,
                  year: year,
                });
                identifier++;
              }
              for (let i = 1; i < nextDays; i++) {
                allDates.push({
                  num: i,
                  id: identifier,
                  month: parseInt(month) + 1,
                  year: month == 11 ? year + 1 : year,
                });
                identifier++;
              }
              // console.log(allDates);
            })()}
            <FlatList
              extraData={selectedDates}
              numColumns={7}
              data={allDates}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                if (
                  item.num === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() == new Date().getFullYear()
                ) {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({type: 'add', payload: item, allDates})
                      }>
                      <Text style={[styles.day, styles.active]}>
                        {item.num}
                      </Text>
                    </TouchableOpacity>
                  );
                }
                let obj = selectedDates.find(
                  obj =>
                    obj.month == item.month &&
                    obj.year == item.year &&
                    obj.num == item.num,
                );
                if (obj == undefined) {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({type: 'add', payload: item, allDates})
                      }>
                      <Text style={styles.day}>{item.num}</Text>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({type: 'add', payload: item, allDates})
                      }>
                      <Text style={[styles.day, styles.selected]}>
                        {item.num}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </View>
        </View>
        <View style={styles.calenderBottom}>
          <Text style={styles.calenderBottomText}>Calender</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#f2f5d7', margin: 20, borderRadius: 20}}>
        <Picker
          selectedValue={month}
          onValueChange={(itemValue, itemIndex) => setDisplayMonth(itemValue)}>
          <Picker.Item label="January" value="0" />
          <Picker.Item label="Feburary" value="1" />
          <Picker.Item label="March" value="2" />
          <Picker.Item label="April" value="3" />
          <Picker.Item label="May" value="4" />
          <Picker.Item label="June" value="5" />
          <Picker.Item label="July" value="6" />
          <Picker.Item label="August" value="7" />
          <Picker.Item label="September" value="8" />
          <Picker.Item label="October" value="9" />
          <Picker.Item label="November" value="10" />
          <Picker.Item label="December" value="11" />
        </Picker>
        <Picker
          selectedValue={year}
          onValueChange={(itemValue, itemIndex) => setDisplayYear(itemValue)}>
          <Picker.Item label="2000" value="2000" />
          <Picker.Item label="2001" value="2001" />
          <Picker.Item label="2002" value="2002" />
          <Picker.Item label="2003" value="2003" />
          <Picker.Item label="2004" value="2004" />
          <Picker.Item label="2005" value="2005" />
          <Picker.Item label="2006" value="2006" />
          <Picker.Item label="2007" value="2007" />
          <Picker.Item label="2008" value="2008" />
          <Picker.Item label="2009" value="2009" />
          <Picker.Item label="2010" value="2010" />
          <Picker.Item label="2011" value="2011" />
          <Picker.Item label="2012" value="2012" />
          <Picker.Item label="2013" value="2013" />
          <Picker.Item label="2014" value="2014" />
          <Picker.Item label="2015" value="2015" />
          <Picker.Item label="2016" value="2016" />
          <Picker.Item label="2017" value="2017" />
          <Picker.Item label="2018" value="2018" />
          <Picker.Item label="2019" value="2019" />
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
          <Picker.Item label="2022" value="2022" />
          <Picker.Item label="2023" value="2023" />
          <Picker.Item label="2024" value="2024" />
          <Picker.Item label="2025" value="2025" />
          <Picker.Item label="2026" value="2026" />
          <Picker.Item label="2027" value="2027" />
          <Picker.Item label="2028" value="2028" />
          <Picker.Item label="2029" value="2029" />
          <Picker.Item label="2030" value="2030" />
          <Picker.Item label="2031" value="2031" />
          <Picker.Item label="2032" value="2032" />
          <Picker.Item label="2033" value="2033" />
          <Picker.Item label="2034" value="2034" />
          <Picker.Item label="2035" value="2035" />
          <Picker.Item label="2036" value="2036" />
          <Picker.Item label="2037" value="2037" />
          <Picker.Item label="2038" value="2038" />
          <Picker.Item label="2039" value="2039" />
          <Picker.Item label="2040" value="2040" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
  },
  calender: {
    height: 450,
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    backgroundColor: '#f2f5d7',
    borderRadius: 40,
  },
  calenderSubContainer: {
    backgroundColor: '#e5f06e',
    flex: 6,
    borderRadius: 40,
    elevation: 2,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: '#f2f5d7',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    right: 5,
  },
  calenderBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calenderBottomText: {
    fontSize: 20,
    color: 'black',
  },
  calenderMonth: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  calenderDate: {
    textAlign: 'center',
    fontSize: 13,
    color: 'black',
  },
  list: {
    borderWidth: 1,
    marginTop: 15,
  },
  daysName: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  days: {
    marginVertical: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  day: {
    marginTop: 15,
    width: 47,
    textAlign: 'center',
    fontSize: 15,
  },
  active: {
    backgroundColor: 'black',
    borderRadius: 50,
    color: 'white',
  },
  selected: {
    backgroundColor: 'green',
    borderRadius: 50,
    color: 'white',
  },
});

export default Calender;
