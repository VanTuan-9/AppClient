import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import chatSocket, { getEvent, sendEvent } from '../../home/Booking/controllers/ChatController';

const Chat = () => {
    const [data, setData] = React.useState([]);
    const [textInput, setTextInput] = React.useState();
    const [check, setCheck] = React.useState(true);
    React.useEffect(() => {
      getEvent(data, setData);
    },[]);
    chatSocket();
    function sendMessage() {
      sendEvent(1, textInput);
      setCheck(!check);
      setTextInput("");
    }
    function Item ({item}) {
        return (
            <View style = {styles.item_chat}>
                <Text style = {styles.text_chat}>{item.item}</Text>
            </View>
        );
    }
  return (
    <View style={styles.comtainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <View>
          <Text style={styles.text_user}>Văn Tuấn</Text>
        </View>
      </View>
      <View style = {styles.content}>
            <FlatList
                data = {data}
                renderItem = {(item) => <Item item = {item}/>}
                keyExtractor = {(item, index) => index}
            />
      </View>
      <View style = {styles.footer}>
            <TextInput
                value = {textInput}
                onChangeText = {setTextInput}
                placeholder = 'Viết tin nhắn...'
                style = {styles.input_chat}
            />
            <TouchableOpacity
                style = {styles.send_msg}
                onPress = {() => sendMessage()}
            >
                <Icon name= 'paper-plane' size = {25} color ='black'/>
            </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
  },
  header: {
    height: '8%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center'
  },
  back: {
      marginLeft: 20,
  },
  text_user: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 20,
  },
  item_chat: {
      flex: 1,
      flexDirection: 'row'
  },
  text_chat: {
    backgroundColor: '#66FFFF',
    margin:10,
    padding: 10,
    borderRadius: 64,
  },
  content: {
    height: '84%',
  },
  footer: {
      height: '8%',
      backgroundColor: '#CCFFFF',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10
  },
  input_chat: {
      flex: 9,
      borderRadius: 64,
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 10
  },
  send_msg: {
      flex: 1,
      alignItems: 'center'
  },
});
export default Chat;
