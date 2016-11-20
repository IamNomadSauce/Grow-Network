var axios = require('axios');
// e40a3c23b79dc6cd770654c8e273bc04

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e40a3c23b79dc6cd770654c8e273bc04';
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    console.log('Location: ' + encodedLocation);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res) {

      if(res.data.cod && res.data.message) {
        debugger;
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp

      }
    }, function(err) {
      throw new Error(err.response.data.message);
    });
  }
}
