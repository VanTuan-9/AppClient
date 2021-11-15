import axios from 'axios';
import Socket from '../../socket/Socket';
import Client from '../models/Client';

export const socket = [];

export const LoginController = (navigation, text) => {
  const getLogin = (data) => {
    if (data.session_id == null) alert('Sai userID');
    else {
      const client = new Client(
        data.info.id_user,
        data.info.first_name,
        data.info.last_name,
        data.info.address,
        data.info.gender,
        data.info.email,
        data.info.id_user,
        data.session_id,
      );
      socket.push(Socket(data.session_id));
      navigation.navigate('System',client);
    }
  };
  axios
    .post(
      'http://157.245.60.55:8082/users/login?id=' +
        text,
    )
    .then(function (response) {
      getLogin(response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert('Vui lòng kiểm tra lại mạng.');
    })
};
