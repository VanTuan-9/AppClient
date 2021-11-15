export default class Booking {
    constructor(id, pickLocation, destinationLocation, numberPeople, service, expense){
        this._id = id;
        this._pickLocation = pickLocation;
        this._destinationLocation = destinationLocation;
        this._numberPeople = numberPeople;
        this._service = service;
        this._expense = expense;
    }
    set id(id)  {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set pickLocation(pickLocation) {
        this._pickLocation = pickLocation;
    }
    get pickLocation() {
        return this._pickLocation;
    }
    set destinationLocation(destinationLocation) {
        this._destinationLocation = destinationLocation;
    }
    get destinationLocation() {
        return this._destinationLocation;
    }
    set numberPeople(numberPeople) {
        this._numberPeople = numberPeople;
    }
    get numberPeople() {
        return this._numberPeople;
    }
    set service (service) {
        this._service = service;
    }
    get service() {
        return this._service;
    }
    set expense(expense) {
        this._expense = expense;
    }
    get expense() {
        return this._expense;
    }
}