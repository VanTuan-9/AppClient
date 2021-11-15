import Service from "./Service";

export default class CarService extends Service {
    constructor(carType) {
        this._carType = carType;
    }
    set carType(carType) {
        this.carType = carType;
    }
    get carType() {
        return this._carType;
    }
}