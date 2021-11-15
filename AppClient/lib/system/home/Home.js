import React from 'react';
import {
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {requestLocationPermission} from '../../permission/PermissionLocation';

// function Item
const Item = ({name, navigation, client}) => {
  return (
    <TouchableOpacity
      style={styles.icon_in_select}
      onPress={() => {
        requestLocationPermission();
        if (name === 'car') navigation.navigate('Booking', client);
      }}>
      <Icon name={name} color="#000000" size={25} />
    </TouchableOpacity>
  );
};

const Home = props => {
  const [text, setText] = React.useState('');

  const listIcon = [
    'car',
    'bookmark',
    'comment',
    'sd-card',
    'bars',
    'comment',
    'database',
    'bars',
  ];

  return (
    <View style={styles.comtainer}>
      <View style={styles.search}>
        <Icon
          name="search"
          color="#FFFFFF"
          size={25}
          style={{flex: 1, textAlign: 'center', paddingHorizontal: 10}}
        />
        <View style={{width: 1, height: '100%', backgroundColor: '#FFFFFF'}} />
        <TextInput
          placeholder="search..."
          value={text}
          onChangeText={setText}
          style={styles.input_search}
          selectionColor="#000000"
        />
      </View>
      <View style={styles.select}>
        <Icon
          name="chevron-left"
          size={30}
          color="#000000"
          style={styles.icon_select}
        />
        <View style={styles.list_select}>
          <FlatList
            data={listIcon}
            renderItem={({item}) => (
              <Item
                name={item}
                navigation={props.navigation}
                client={props.client}
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
        <Icon
          name="chevron-right"
          size={30}
          color="#000000"
          style={styles.icon_select}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    width: '100%',
    height: '7%',
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_search: {
    backgroundColor: '#FFFFFF',
    flex: 9,
    margin: 5,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: 18,
  },
  select: {
    width: '95%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  list_select: {
    flex: 8,
    borderRadius: 64,
    overflow: 'hidden',
    paddingVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  icon_select: {
    flex: 1,
    textAlign: 'center',
  },
  icon_in_select: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 64,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

export default Home;
