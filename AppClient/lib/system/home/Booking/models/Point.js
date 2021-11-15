export default class Point {
    constructor(lat, long) {
        this._lat = lat;
        this._long = long;
    }
    set lat(lat) {
        this._lat = lat;
    }
    get lat() {
        return this._lat
    }
    set long(long) {
        this._long = long;
    }
    get long() {
        return this._long;
    }
}