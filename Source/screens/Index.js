import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import Calender from '../components/Calender_1/Calender';
import CalenderView from '../components/Calender_2/CalenderView';
import Leave from '../components/Leave';
import Toggle from '../components/Toggle';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <Calender />
      <CalenderView />
      <Toggle />
      <Leave
        updateStatus={false}
        date="Dec 22,2021"
        LeaveBag="Leave Basket"
        LeaveTime="Full Day"
        LeaveStatus="To Approve"
      />
      <Leave
        date="Dec 22,2021"
        LeaveBag="Leave Basket"
        LeaveTime="Full Day"
        LeaveStatus="To Approve"
      />
      <Leave
        date="Dec 22,2021"
        LeaveBag="Compensatory"
        LeaveTime="Full Day"
        LeaveStatus="Approved"
      />
      <Leave
        date="Dec 22,2021"
        LeaveBag="Leave Basket"
        LeaveTime="Full Day"
        LeaveStatus="Rejected"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});

export default Index;
