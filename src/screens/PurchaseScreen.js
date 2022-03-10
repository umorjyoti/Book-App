import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import BookDetails from '../components/BookDetails';
import AddressCard from '../components/AddressCard';
import BookContext from '../context/BookStoreContext';
// import Geocoder from 'react-native-geocoder';
import constants from '../static/constants';
import {Appbar, Button} from 'react-native-paper';

const PurchaseScreen = ({route, navigation}) => {
  const id = route.params.id;

  const {addOrder, orders, getDataById, coords, setAddress, results} =
    useContext(BookContext);

  const data = results[id];

  // var NY = {
  //   lat: coords.latitude,
  //   lng: coords.longitude,
  // };

  // useEffect(() => {
  //   const getFormattedAddress = async () => {
  //     await Geocoder.geocodePosition(NY)
  //       .then(res => {
  //         setAddress(res[4]);
  //       })
  //       .catch(err => console.log(err));
  //   };
  //   getFormattedAddress();
  // }, []);

  return (
    <View>
      <Appbar.Header style={styles.topheader}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Book App" />
      </Appbar.Header>
      <BookDetails title={data.API} desc={data.Description} />
      <AddressCard />

      <Button
        color={constants.secondaryColor}
        style={styles.button}
        icon="cart"
        mode="contained"
        onPress={() => {
          if (orders.includes(id)) {
            Alert.alert('You have already placed your order');
            return navigation.pop();
          }
          Alert.alert('Your order has been placed successfully');
          addOrder(id);
          return navigation.pop();
        }}>
        {orders.includes(id) ? constants.purchased : constants.buy}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginHorizontal: 100,
  },
  topheader: {
    backgroundColor: constants.primaryColor,
  },
});

export default PurchaseScreen;
