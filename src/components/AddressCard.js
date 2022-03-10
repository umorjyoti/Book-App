import React, {useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import BookContext from '../context/BookStoreContext';
import {Card, Title, Paragraph} from 'react-native-paper';

const AddressCard = () => {
  const {address} = useContext(BookContext);
  return (
    <Card style={{margin: 10}}>
      <Card.Content>
        <Title>Address</Title>
        <Paragraph>Assam</Paragraph>
        <Paragraph>NH-37, Koraikhowa, Jorhat, Assam 785006</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default AddressCard;
