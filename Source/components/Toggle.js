import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome5Icon
          name={toggle ? 'home' : 'car'}
          color="#32a14c"
          size={40}
        />
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.textToToggle}>
          {toggle ? 'Switch To Your TimeSheet' : 'Switch to Manager View'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (toggle) {
              return setToggle(false);
            }
            return setToggle(true);
          }}>
          <Text style={styles.linkText}>Click here to Switch</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width - 40,
    marginHorizontal: 20,
    height: 70,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  textGroup: {
    paddingVertical: 10,
    justifyContent: 'space-around',
    flex: 5,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#f2f0f0',
    top: -15,
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textToToggle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Toggle;
