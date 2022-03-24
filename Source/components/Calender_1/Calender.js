import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import DailyStatus from './DailyStatus';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Calender = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.timeline}>Dec 20 - 26,2021</Text>
        <Text style={styles.totalTime}>Total Working Hours : 45 hr</Text>
      </View>
      <View style={styles.tableStructure}>
        <View style={styles.heading}>
          <Text>Days</Text>
          <Text>Hours</Text>
          <Text>Status</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <DailyStatus title="Mon" hrs={8} status={true} />
        <DailyStatus title="Tue" hrs={9} status={true} />
        <DailyStatus title="Wed" hrs={9} status={true} />
        <DailyStatus title="Thu" hrs={9} status={true} />
        <DailyStatus title="Fri" hrs={9} status={true} />
        <DailyStatus title="Sat" />
        <DailyStatus title="Sun" />
        <DailyStatus title="Total" hrs={45} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width - 20,
    margin: 10,
    height: 170,
    padding: 10,
  },
  timeline: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  totalTime: {
    fontSize: 15,
    marginTop: 5,
  },
  heading: {
    justifyContent: 'space-around',
  },
  tableStructure: {
    marginTop: 12,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
  },
});

export default Calender;
