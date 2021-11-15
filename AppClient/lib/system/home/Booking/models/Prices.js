export default class Prices {
    constructor(id, calPrice, travelDistance) {
        this._id = id;
        this._calPrice = calPrice;
        this._travelDistance = travelDistance;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set calPrice(calPrice) {
        this._calPrice = calPrice;
    }
    get calPrice() {
        return this._calPrice;
    }
    set travelDistance(travelDistance) {
        this._travelDistance = travelDistance;
    }
    get travelDistance() {
        return this._travelDistance;
    }
}