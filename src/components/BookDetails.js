import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const BookDetails = ({title, desc, img, price}) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigq6uJh5hME3jnf0MNd8Y6EENCGBS4gfYjQ&usqp=CAU',
        }}
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{desc}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
});

export default BookDetails;
