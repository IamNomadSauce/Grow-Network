var axios = require('axios');

// e40a3c23b79dc6cd770654c8e273bc04
const CANNABIS_REPORTS_URL = 'https://www.cannabisreports.com/api/v1.0/strains/VUJCJ4TYMG000000000000000';

module.exports = {
  getStrain: function(name) {
    var requestUrl = '${CANNABIS_REPORTS_URL}:search';
    return axios.get(requestUrl).then(function(res) {
      return res.data.data.name
    });
  }
}
