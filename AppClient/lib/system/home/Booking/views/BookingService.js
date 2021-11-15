import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ViewBingMap from '../controllers/ViewMapController';
import BookingServiceController from '../controllers/BookingServiceController';

export default function BookingService({route, navigation}) {
  const backStep = () => {
    navigation.goBack();
  };

  const data = route.params.listServices;

  const [idItem, setIDItem] = React.useState(0);

  function chooseID(id) {
    setIDItem(id);
  }

  const Item = ({id_service, id, grabService, numberSeat, price, getID}) => {
    const icon = id_service == 1 ? 'motorcycle' : 'car';
    return (
      <TouchableOpacity
        style={[styles.service, {marginTop: 10}]}
        onPress={() => getID(id)}>
        <Icon name={icon} color="white" size={25} />
        <View>
          <Text style={styles.text}>{grabService}</Text>
          <Text style={styles.text}>{numberSeat} người</Text>
        </View>
        <Text style={styles.text}>{price} vnđ</Text>
      </TouchableOpacity>
    );
  };

  const [isShow, setShow] = React.useState(false);
  
  const ListService = ({setShow}) => {
    return isShow == true ? (
      <View style={styles.chooseService}>
        <FlatList
          style={{width: '100%'}}
          data={data}
          renderItem={({item, index}) => (
            <Item
              id_service={item.id}
              id={index}
              grabService={item.nameService}
              numberSeat={item.id}
              price={item.price}
              getID={id => chooseID(id)}
            />
          )}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            setShow(0);
          }}>
          <Text style={{padding: 10, color: 'white', fontWeight: 'bold'}}>
            Xác nhận
          </Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.comtainer}>
      <ViewBingMap listPoints={route.params.listPoints} />
      <View style={{backgroundColor: '#ffffff', height: '6%'}} />
      <View style={styles.box}>
        <TouchableOpacity style={styles.box1} onPress={() => backStep()}>
          <Image
            style={styles.image_box2}
            source={require('../../images/icon_next_left.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.box2}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              width: '100%',
              textAlign: 'center',
            }}>
            {data[idItem].price} vnđ
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Dịch vụ hiện có</Text>
            <TouchableOpacity
              onPress={() => {
                setShow(1);
              }}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.service, styles.widthService]}>
            <Icon name="motorcycle" color="white" size={25} />
            <View>
              <Text style={styles.text}>{data[idItem].nameService}</Text>
              <Text style={styles.text}>{data[idItem].id} người</Text>
            </View>
            <Text style={styles.text}>{data[idItem].price} vnđ</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.box3}
          onPress={() =>
            BookingServiceController(route.params.booking, data[idItem], navigation, route.params.client)
          }>
          <Image
            style={styles.image_box2}
            source={require('../../images/icon_next_right.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ListService setShow={setShow} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    position: 'relative',
  },
  box: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: '90%',
    height: '20%',
    bottom: 30,
    marginHorizontal: '5%',
    borderRadius: 24,
    elevation: 4,
    flexDirection: 'row',
  },
  box1: {
    width: '10%',
    height: '100%',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    position: 'relative',
    borderRightWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  box2: {
    width: '80%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  box3: {
    width: '10%',
    height: '100%',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    position: 'relative',
    borderLeftWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  image_box2: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  service: {
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  widthService: {
    width: '90%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  chooseService: {
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '30%',
    left: '5%',
    borderRadius: 20,
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
});
