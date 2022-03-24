import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import BookContext from '../context/BookStoreContext';
import constants from '../static/constants';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const BookCollection = ({img, title, desc, id, onPress}) => {
  const {orders} = useContext(BookContext);
  const [showText, setShowText] = useState(false);

  return (
    <View style={styles.container}>
      <Card
        style={
          showText ? {height: 320, width: '100%'} : {height: 280, width: '100%'}
        }>
        <Card.Cover
          style={{height: 110}}
          resizeMode="contain"
          source={require('/Learning/React - Native/BookApp/assets/minion.jpg')}
        />
        <Card.Content>
          <Title style={styles.text}>{title}</Title>
          <Paragraph
            numberOfLines={showText ? null : 2}
            onPress={() => {
              if (showText) {
                return setShowText(false);
              }
              return setShowText(true);
            }}>
            {desc}
          </Paragraph>
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
  container: {
    width: Dimensions.get('window').width / 2.18,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  action: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18.5,
    fontFamily: 'Fredoka-Medium',
  },
});

export default BookCollection;
