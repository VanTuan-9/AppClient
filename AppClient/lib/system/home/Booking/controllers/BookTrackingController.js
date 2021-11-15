import axios from "axios";
import { socket } from "../../../../login/controllers/LoginController";

export default async function BookTrackingController (pickLocation, destinationLocation ,client, navigation) {
    const headers = {
        session: client.sessionID,
      };
    const listPoints = [];
    // console.log(pickLocation);
    // console.log(destinationLocation);
    // console.log(client);
    await axios
      .post('http://157.245.60.55:8082/maps/route?p0=' + pickLocation + '&p1=' + destinationLocation, null, {headers})
      .then(response => {
        for (point of response.data.coordinates) listPoints.push(point);
      })
      .catch(error => {
        console.log(error);
      });
    navigation.navigate("BookTracking", {
        listPoints,
        pickLocation,
        destinationLocation, 
    });
}
export function getGPSDriver(setLat, setLong) {
  socket[0].on("track", data => {
    setLat(data.latitude);
    setLong(data.longitude);
    // console.log('a');
  })
}