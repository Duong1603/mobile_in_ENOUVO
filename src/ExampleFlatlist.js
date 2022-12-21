import * as React from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';

export default function ExampleFlatList() {
  const allpr = [
    {
      id: '1',
      name: 'Naa Nii',
      avatar: `https://reactnative.dev/img/tiny_logo.png`,
      time: '47w',
      follow: 'followed by 15k',
    },
    {
      id: '2',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '3',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '4',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '5',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '6',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '7',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '8',
      name: 'Naa Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
  ];
  const Item = ({name, avatar, time, follow}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.avatarCard} source={{uri: avatar}} />
        <View style={styles.rightCard}>
          <View style={styles.titleCard}>
            <Text style={styles.nameCard}>{name}</Text>
            <Text style={styles.timeCard}>{time}</Text>
          </View>
          <Text style={styles.followCard}>{follow}</Text>
          <View style={styles.buttonCard}>
            <Button title="confirm" color="#841584" />
            <Button title="delete" color="#841584" />
          </View>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <Item
      avatar={item.avatar}
      name={item.name}
      time={item.time}
      follow={item.follow}
    />
  );

  return <FlatList numColumns={1} data={allpr} renderItem={renderItem} />;
}
const styles = StyleSheet.create({
  card: {
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  avatarCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  rightCard: {
    margin: 10,
  },
  titleCard: {
    flexDirection: 'row',
  },
  nameCard: {
    fontSize: 22,
    alignSelf: 'flex-start',
  },
  timeCard: {},
  buttonCard: {
    flexDirection: 'row',
  },
});
