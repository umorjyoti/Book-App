import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DailyStatus = ({title, date = '-', status = false, active = false}) => {
  return (
    <View style={[styles.workingStatus, active ? styles.active : null]}>
      <Text style={title == 'Sat' || title == 'Sun' ? null : styles.title}>
        {title}
      </Text>
      <Text style={title == 'Sat' || title == 'Sun' ? null : styles.date}>
        {date}
      </Text>
      {status ? (
        <View style={styles.icon}>
          <FontAwesome5Icon name="check" color="#32a14c" />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  workingStatus: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 15,
  },
  active: {backgroundColor: '#b8daf5'},
  title: {
    color: 'black',
  },
  date: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  icon: {
    padding: 2,
    backgroundColor: '#deffe6',
    borderRadius: 5,
  },
});

export default DailyStatus;
