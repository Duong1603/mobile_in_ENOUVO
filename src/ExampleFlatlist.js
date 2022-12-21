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
        'https://danviet.mediacdn.vn/2021/5/5/1-16201893641271008335156.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '3',
      name: 'Naahgdghd Nii',
      avatar:
        'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '4',
      name: 'Naahsh Nii',
      avatar:
        'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '5',
      name: 'Naa Nii',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
      time: '47w',
      follow: '',
    },
    {
      id: '6',
      name: 'Naa Nii',
      avatar:
        'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png',
      time: '47w',
      follow: '',
    },
    {
      id: '7',
      name: 'Naa Nii',
      avatar:
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png',
      time: '47w',
      follow: '',
    },
    {
      id: '8',
      name: 'Naa Nii',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
      time: '47w',
      follow: '',
    },
  ];
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={{color: 'black', fontSize: 25}}>Friends</Text>
          <Image
            style={styles.iconSearch}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
            }}
          />
        </View>
        <View style={styles.viewBotton}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>Your Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={allpr}
      ListHeaderComponent={Header}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <View style={styles.card}>
            <Image style={styles.avatarCard} source={{uri: item.avatar}} />
            <View style={styles.rightCard}>
              <View style={styles.titleCard}>
                <Text style={styles.nameCard}>{item.name}</Text>
                <Text style={styles.timeCard}>{item.time}</Text>
              </View>
              <Text style={styles.followCard}>{item.follow}</Text>
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
        </View>
      )}
    />
  );
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  viewBotton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 280,
    padding: 10,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
  },
  name: {
    paddingTop: 30,
    color: 'black',
    fontSize: 18,
  },
  inforButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  headerContainer: {
    height: 120,
    backgroundColor: 'white',
  },
  headerButton: {
    borderRadius: 50,
    backgroundColor: '#E4E3E8',
    width: 120,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#0077EA',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#E4E3E8',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
