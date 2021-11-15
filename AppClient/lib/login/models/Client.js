import User from './User';
export default class Client extends User {
  constructor(userID, firstName, lastName, address, gender, email, password, sessionID) {
    super(userID, firstName,lastName, address, gender, email, password);
    this._sessionID = sessionID;
  }
  set sessionID(sessionID) {
    this._sessionID = sessionID;
  }
  get sessionID() {
    return this._sessionID;
  }
}
