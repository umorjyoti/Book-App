import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BookList from '../components/BookList';
import BookCollection from '../components/BookCollection';
import BookContext from '../context/BookStoreContext';
import {Switch} from 'react-native-switch';
// import GetLocation from 'react-native-get-location';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import constants from '../static/constants';

const Home = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {data, setCoords, results, loading, orders} = useContext(BookContext);

  // useEffect(() => {
  //   const getCoordinates = async () => {
  //     await GetLocation.getCurrentPosition({
  //       enableHighAccuracy: true,
  //       timeout: 15000,
  //     }).then(location => {
  //       setCoords(location);
  //     });
  //   };
  //   getCoordinates();
  // }, []);

  return (
    <>
      <Appbar.Header style={styles.topheader}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Book App" />
        <Switch
          activeText={'Collection'}
          inActiveText={'List'}
          backgroundActive={'#14992f'}
          backgroundInactive={'#fc5603'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          switchWidthMultiplier={isEnabled ? 4 : 3}
        />
      </Appbar.Header>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            key={isEnabled ? 2 : 1}
            numColumns={isEnabled ? 2 : 1}
            showsVerticalScrollIndicator={false}
            data={results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              let id = index;
              if (isEnabled) {
                return (
                  <BookCollection
                    title={item.API}
                    img={item.img}
                    desc={item.Description}
                    id={index}
                    onPress={() => navigation.navigate('Purchase', {id})}
                  />
                );
              }
              return (
                <Card
                  style={{
                    marginBottom: 20,
                  }}>
                  <Card.Cover
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigq6uJh5hME3jnf0MNd8Y6EENCGBS4gfYjQ&usqp=CAU',
                    }}
                  />
                  <Card.Content>
                    <Title>{item.API}</Title>
                    <Paragraph>{item.Description}</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      onPress={() =>
                        navigation.navigate('Purchase', {id: index})
                      }>
                      {orders.includes(id)
                        ? constants.purchased
                        : constants.buy}
                    </Button>
                  </Card.Actions>
                </Card>
                // <BookList
                //   title={item.API}
                //   img={item.img}
                //   desc={item.Description}
                //   id={index}
                //   onPress={() => navigation.navigate('Purchase', {id: id})}
                // />
              );
            }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  topheader: {
    backgroundColor: constants.primaryColor,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 13,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

export default Home;
