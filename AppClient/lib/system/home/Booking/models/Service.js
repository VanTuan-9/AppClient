export default class Service {
  constructor(id, nameService, activeService, price, title) {
    this._id = id;
    this._nameService = nameService;
    this._activeService = activeService;
    this._price = price;
    this._title = title;
  }
  set id(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }

  set nameService(nameService) {
    this._nameService = nameService;
  }
  get nameService() {
    return this._nameService;
  }

  set activeService(activeService) {
    this._activeService = activeService;
  }
  get activeService() {
    return this._activeService;
  }

  set price(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }

  set title(title) {
    this._title = title;
  }
  get title() {
    return this._title;
  }
}
