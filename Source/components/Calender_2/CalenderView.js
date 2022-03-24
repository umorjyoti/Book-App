import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import DailyStatusHighlight from './DailyStatusHighlight';

const width = Dimensions.get('window').width;

const CalenderView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dec 20 - 26,2021</Text>
      <View style={styles.table}>
        <DailyStatusHighlight
          title="Mon"
          date={20}
          status={true}
          active={true}
        />
        <DailyStatusHighlight title="Tue" date={21} status={true} />
        <DailyStatusHighlight title="Wed" date={22} status={true} />
        <DailyStatusHighlight title="Thu" date={23} status={true} />
        <DailyStatusHighlight title="Fri" date={24} status={true} />
        <DailyStatusHighlight title="Sat" date={25} />
        <DailyStatusHighlight title="Sun" date={26} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width - 20,
    margin: 10,
    height: 150,
    padding: 10,
  },
  heading: {
    flex: 2,
    fontSize: 18,
    color: 'black',
  },
  table: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default CalenderView;
