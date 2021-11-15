import Booking from '../models/Booking';

export default function BookingServiceController(
  booking,
  service,
  navigation,
  client,
) {
  const mBooking = new Booking(
    booking.id,
    booking.pickLocation,
    booking.destinationLocation,
    service.id,
    service,
    service.price,
  );
  // console.log(service.id);
  navigation.navigate("BookingPayment",{
    mBooking, client
  });
}
