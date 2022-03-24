import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const Leave = ({
  updateStatus = true,
  date,
  LeaveBag,
  LeaveTime,
  LeaveStatus,
}) => {
  return (
    <View style={styles.container}>
      {updateStatus ? null : <View style={styles.circle}></View>}
      <View style={styles.dateConatiner}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.leaveDetails}>
          <Text style={styles.leave}>{LeaveBag}</Text>
          <View style={styles.verticalLine}></View>
          <Text style={styles.leave}>{LeaveTime}</Text>
        </View>
      </View>
      <View style={styles.approvalStatus}>
        {(() => {
          if (LeaveStatus == 'To Approve') {
            return (
              <Text style={styles.leaveStatusToApprove}>{LeaveStatus}</Text>
            );
          } else if (LeaveStatus == 'Approved') {
            return (
              <Text style={styles.leaveStatusApproved}>{LeaveStatus}</Text>
            );
          } else if (LeaveStatus == 'Rejected') {
            return (
              <Text style={styles.leaveStatusRejected}>{LeaveStatus}</Text>
            );
          }
          return null;
        })()}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    margin: 20,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
  },
  circle: {
    marginTop: 10,
    height: 15,
    width: 15,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  dateConatiner: {
    flex: 4,
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  leaveDetails: {
    flexDirection: 'row',
  },
  approvalStatus: {
    alignSelf: 'center',
    flex: 2,
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  leave: {
    fontWeight: '700',
    fontSize: 16,
  },
  leaveStatusToApprove: {
    fontSize: 15,
    color: 'black',
    backgroundColor: '#fbff8f',
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  leaveStatusApproved: {
    fontSize: 15,
    color: 'black',
    backgroundColor: '#8cff82',
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  leaveStatusRejected: {
    fontSize: 15,
    color: 'black',
    backgroundColor: '#fc8383',
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
});

export default Leave;
