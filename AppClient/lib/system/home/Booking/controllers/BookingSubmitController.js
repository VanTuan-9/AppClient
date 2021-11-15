import axios from "axios";
import { Alert } from "react-native";
import { socket } from "../../../../login/controllers/LoginController";
import Booking from "../models/Booking";

export default async function BookingSubmitController(booking, client, navigation, setBooking){
    const data = {
        "id_booking":null,
        "number":booking.numberPeople,
        "id_service":booking.service.id,
        "pick_location":booking.pickLocation,
        "destination_location":booking.destinationLocation,
        "timer":null,
        "status":null
    };        
    const headers = {
        session: client.sessionID
    }
    const nBooking = [];
    await axios
    .post("http://157.245.60.55:8082/booking/create", data, {headers})
    .then(response => {
        const tg = new Booking(response.data.booking.id_booking,
            response.data.booking.pick_location, 
            response.data.booking.destination_location,
            response.data.booking.number,
            booking.service, booking.expense);
        nBooking.push(tg);
    })
    await axios 
    .post("http://157.245.60.55:8082/booking/acceptBooking?idBooking=" + nBooking[0].id, null, {headers})
    .then( response => {
        // console.log(response);
    })
    .catch( error => {
        // console.log(error);
        Alert.alert("Hiện tại không có tài xế nào! \nMời bạn đặt lại sau :D");
        navigation.goBack();
    })
    return nBooking;
}