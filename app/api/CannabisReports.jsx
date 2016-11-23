var React = require('react');
var axios = require('axios');
var Strain = require('Strain');

// e40a3c23b79dc6cd770654c8e273bc04
const CANNABIS_REPORTS_URL = 'https://www.cannabisreports.com/api/v1.0/strains/search/';

module.exports = {
  getStrain: function(name) {
    var requestUrl = `${CANNABIS_REPORTS_URL}:${name}`;
    var dataL = [];
    var searchL = [];
    return axios.get(requestUrl).then(function(res) {
      dataL = [res.data.data];
      // console.log('FROMapiPage-dataL: ' + dataL[0]);
      for (var i = 0, len = dataL[0].length; i < len; i++) {
        // console.log('getStrain-Item: ' + dataL[0][i].ucpc);
        // searchL.push(dataL[0][i].name);
        searchL.push(<Strain name={dataL[0][i].name} />);
      }
      // console.log('C-R-FINALL-searchL: ' + searchL);

      return searchL;
    },
    function(err) {
      throw new Error(err.response.data);
    });
  }
}
