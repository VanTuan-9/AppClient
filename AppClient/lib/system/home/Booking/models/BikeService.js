import Service from "./Service";

export default class BikeService extends Service {
    constructor(_bikeType) {
        this.bikeType = bikeType;
    }
    set bikeType(bikeType) {
        this._bikeType = bikeType;
    }
    get bikeType() {
        return this._bikeType;
    }
}