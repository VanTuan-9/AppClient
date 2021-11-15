class User {
  constructor(userID, firstName, lastName, address, gender, email, password) {
    this._userID = userID;
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
    this._gender = gender;
    this._email = email;
    this._password = password;
  }

  set userID(userID) {
    this._userID = userID;
  }
  get userID() {
    return this._userID;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
  get firstName() {
    return this._firstName;
  }
  
  set lastName(lastName) {
    this._lastName = lastName;
  }
  get lastName() {
    return this._lastName;
  }

  set address(address) {
    this._address = address;
  }
  get address() {
    return this._address;
  }

  set gender(gender) {
    this._gender = gender;
  }
  get ggender() {
    return this._gender;
  }
  
  set email(email) {
    this._email = email;
  }
  get email() {
    return this._email;
  }

  set password(password) {
    this._password = password;
  }
  get password() {
    return this._password;
  }
}
export default User;
