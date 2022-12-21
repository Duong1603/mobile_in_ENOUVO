import * as React from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ExampleFlatList() {
  const allpr = [
    {
      id: '1',
      name: 'Naa Nii',
      avatar: `https://reactnative.dev/img/tiny_logo.png`,
      time: '47w',
      follow: 'Followed by 15k',
    },
    {
      id: '2',
      name: 'Naa ffffNii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '3',
      name: 'Naahgdghd Nii',
      avatar:
        'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '4',
      name: 'Naahsh Nii',
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
            <TouchableOpacity
              style={styles.button_left}
              onPress={() => Alert.alert('Successfull')}>
              <Text style={styles.word_button_left}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_right}
              onPress={() => Alert.alert('faill')}>
              <Text style={styles.word_button_right}>Delete</Text>
            </TouchableOpacity>
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
    width: 90,
    height: 90,
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
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    width: 190,
  },
  timeCard: {
    alignSelf: 'flex-end',
    // marginLeft: 5,
    fontSize: 16,
  },
  followCard: {
    fontSize: 18,
  },
  buttonCard: {
    flexDirection: 'row',
  },
  button_left: {
    width: 110,
    alignItems: 'center',
    backgroundColor: '#3982E4',
    padding: 10,
    borderRadius: 10,
  },
  button_right: {
    width: 110,
    alignItems: 'center',
    backgroundColor: '#C9CCD1',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  word_button_left: {
    fontWeight: 'bold',
    color: 'white',
  },
  word_button_right: {
    fontWeight: 'bold',
    color: 'black',
  },
});
