export default class Location {
  constructor(locationID, locationName, latitude, longitude, defaultLocation) {
    this._locationID = locationID;
    this._locationName = locationName;
    this._latitude = latitude;
    this._longitude = longitude;
    this._defaultLocation = defaultLocation;
  }
  set locationID(locationID) {
    this._locationID = locationID;
  }
  get locationID() {
    return this._locationID;
  }
  set locationName(locationName) {
    this._locationName = locationName;
  }
  get locationName() {
    return this._locationName;
  }
  set latitude(latitude) {
    this._latitude = latitude;
  }
  get latitude() {
    return this._latitude;
  }
  set longitude(longitude) {
    this._longitude = longitude;
  }
  get longitude() {
    return this._longitude;
  }
  set locationDefault(defaultLocation) {
    this._defaultLocation = defaultLocation;
  }
  get locationDefault() {
    return this._defaultLocation;
  }
}
