import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DailyStatus = ({title, hrs = '-', status = false}) => {
  return (
    <View style={styles.workingStatus}>
      <Text>{title}</Text>
      <Text style={title == 'Sat' || title == 'Sun' ? null : styles.hours}>
        {hrs}
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
  },
  hours: {
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
