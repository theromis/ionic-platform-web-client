class BaseSettings {

  constructor() {
    this._settings = null;
    return this;
  }

  factory(name, func) {
    this._settings = func();
    return this;
  }

  get(name) {
    return this._settings.get(name);
  }

  finish() {
    return this;
  }
}

var temp = new BaseSettings().factory('$ionicCoreSettings', function() {
  "IONIC_SETTINGS_STRING_START";"IONIC_SETTINGS_STRING_END";
})

.finish();

export class Settings {

  constructor() {
    this._locations = {
      'api': 'https://www.lonje.com',
      'push': 'https://www.lonje.com',
      'analytics': 'https://www.lonje.com',
      'deploy': 'https://www.lonje.com'
    };
    this._devLocations = this.get('dev_locations');
    if (!this._devLocations) { this._devLocations = {}; }
  }

  get(name) {
    return temp.get(name);
  }

  getURL(name) {
    if (this._devLocations[name]) {
      return this._devLocations[name];
    } else if (this._locations[name]) {
      return this._locations[name];
    } else {
      return null;
    }
  }
}
