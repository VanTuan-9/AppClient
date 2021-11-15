import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import {CheckBox, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LoginController} from '../controllers/LoginController';

function Login({navigation}) {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.comtainer}>
      <Image style={styles.logo} source={require('./images/logo.png')} />
      <Text style={styles.text_login}>LOGIN</Text>

      <View style={styles.input}>
        <Icon
          name="users"
          size={20}
          color="#AAAAAA"
          style={{flex: 1, paddingHorizontal: 8, textAlign: 'center'}}
        />
        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: '#949493',
          }}
        />
        <TextInput
          style={{flex: 9}}
          placeholder="UserID"
          value={text}
          onChangeText={setText}
        />
      </View>
      <View style={styles.option_login}>
        <CheckBox
          checked={checked}
          checkedColor="#0F0"
          containerStyle={{
            borderWidth: 0,
            backgroundColor: 'transparent',
            marginLeft: 0,
            padding: 0,
          }}
          onPress={() => setChecked(!checked)}
          size={20}
          title="Save your uID"
          uncheckedColor="#F00"
        />
        <TouchableWithoutFeedback onPress={() => Alert.alert('vt')}>
          <Text>Forgot uID</Text>
        </TouchableWithoutFeedback>
      </View>
      <Button
        title="Login"
        type="solid"
        buttonStyle={{
          width: 150,
          borderRadius: 10,
          backgroundColor: '#000000',
          marginTop: 50,
        }}
        onPress={() => LoginController(navigation, text)}
      />

      <View style={styles.or_hr}>
        <View style={styles.hr} />
        <Text>or</Text>
        <View style={styles.hr} />
      </View>

      <TouchableOpacity
        style={styles.login_gg}
        onPress={() => Alert.alert('vt')}>
        <Icon
          name="google"
          size={35}
          color="#FFFFFF"
          style={{paddingVertical: 5}}
        />
        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: '#949493',
            marginHorizontal: 10,
          }}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            marginHorizontal: 20,
            fontWeight: 'bold',
          }}>
          Sign in with google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 30}}
        onPress={() => getAPI()}>
        <Text style={styles.text_register}>Don't have an account?</Text>
        <Text style={styles.text_register}>Register Account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#949493',
    borderRadius: 12,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: '15%',
  },
  text_login: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginTop: '-10%',
  },
  option_login: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  or_hr: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  hr: {
    width: '40%',
    height: 1,
    marginVertical: 10,
    backgroundColor: '#AAAAAA',
    elevation: 2,
  },
  login_gg: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#DB4437',
    paddingHorizontal: 10,
    borderColor: '#949493',
    borderWidth: 1,
    elevation: 4,
    marginTop: 10,
  },
  text_register: {
    fontWeight: 'bold',
  },
});

export default Login;
