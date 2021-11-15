import axios from 'axios';
import Booking from '../models/Booking';
import Service from '../models/Service';
export default async function BookingLocationController(props, start, end) {
  start = start.normalize('NFC');
  end = end.normalize('NFC');
  if (start.length == 0 || end.length == 0) alert('Chưa điền đầy đủ thông tin');
  else {
    const listPoints = [];
    const listServices = [];
    const headers = {
      session: props.client.sessionID,
    };
    await axios
      .get('http://157.245.60.55:8082/services')
      .then(response => {
        for (let service of response.data.services) {
          const item = new Service(
            service.id_service,
            service.name,
            service.active,
            service.price,
            service.detail,
          );
          listServices.push(item);
        }
      })
      .catch(error => {});
    await axios
      .post('http://157.245.60.55:8082/maps/route?p0=' + start + '&p1=' + end, null, {headers})
      .then(response => {
        for (point of response.data.coordinates) listPoints.push(point);
      })
      .catch(error => {
        console.log(error);
      });
    const booking = new Booking(
      props.client.sessionID,
      start,
      end,
      null,
      null,
      null,
    );
    for(item in listServices) {
      await axios
        .post(
          'http://157.245.60.55:8082/payments?p0=' +
            start +
            '&p1=' +
            end +
            '&serviceId=' +
            listServices[item].id,
          null,
          {headers},
        )
        .then((response) => {
          listServices[item].price = response.data.calPrice;
        })
        .catch((error) =>{
          console.log(error);
        });
    }
    props.navigation.navigate('BookingService', {
      listPoints,
      listServices,
      client: props.client,
      booking,
    });
  }
}
