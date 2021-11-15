import {socket} from "../../../../socket/Socket";

export function getEvent(listData, setData) {
  socket.on("chatmsg", data => {
      const newData = [...listData];
      newData.push(data);
      listData = newData;
      setData(newData);
      console.log(newData);
    })
}
export function sendEvent(eventId, data) {
  let event = 'location';
  if(eventId == 1)  event = "chatmsg";
  socket.emit(event, data);
}