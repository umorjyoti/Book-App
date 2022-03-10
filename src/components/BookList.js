import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Button, AppState} from 'react-native';
import BookContext from '../context/BookStoreContext';
import constants from '../static/constants';

const BookList = ({img, title, desc, price, id, onPress}) => {
  const {orders} = useContext(BookContext);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{desc}</Text>
        </View>
        <Button
          title={orders.includes(id) ? constants.purchased : constants.buy}
          color={
            orders.includes(id) ? constants.purchasedColor : constants.buyColor
          }
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
    height: 170,
  },
  image: {
    height: 170,
    width: 150,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookList;
