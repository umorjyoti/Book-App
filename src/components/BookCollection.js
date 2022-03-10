import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import BookContext from '../context/BookStoreContext';
import constants from '../static/constants';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const BookCollection = ({img, title, desc, id, onPress}) => {
  const {orders} = useContext(BookContext);

  return (
    <View style={styles.container}>
      {/* <View style={styles.subContainer}>
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
      </View> */}
      <Card style={styles.card}>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{desc}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.action}>
          <Button onPress={onPress}>
            {orders.includes(id) ? constants.purchased : constants.buy}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   width: Dimensions.get('window').width / 2.18,
  //   backgroundColor: 'pink',
  //   marginBottom: 10,
  //   marginRight: 10,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // subContainer: {
  //   height: 170,
  //   padding: 10,
  //   width: '100%',
  //   justifyContent: 'space-between',
  // },
  // image: {
  //   marginTop: 10,
  //   height: 150,
  //   width: 100,
  // },
  // title: {
  //   fontSize: 20,
  //   color: 'black',
  //   marginBottom: 2,
  // },
  // price: {
  //   fontSize: 13,
  //   fontWeight: 'bold',
  // },

  container: {
    width: Dimensions.get('window').width / 2.18,
    height: 420,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
  },
  action: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
});

export default BookCollection;
