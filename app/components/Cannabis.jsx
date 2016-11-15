var React = require('react');
var CannabisForm = require('CannabisForm');
var CannabisMessage = require('CannabisMessage');
var CannabisReports = require('CannabisReports');
var axios = require('axios');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var Cannabis = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(name) {
    var that = this;
    this.setState({isLoading: true});
    var dataL = [];


    const CANNABIS_REPORTS_URL = 'https://www.cannabisreports.com/api/v1.0/strains/search/:blue'
    // var requestUrl = '${CANNABIS_REPORTS_URL}${name}';

    // TODO Transfer over ApI once bug is fixed from weather.jsx
    return axios.get(CANNABIS_REPORTS_URL)
  .then((res) => {
    dataL =  [res.data.data];

    for (var i = 0, len = dataL[0].length; i < len; i++) {
      console.log(dataL[0][i].name);
    }
    console.log(dataL[0][1].name);
    that.setState({
      name:name,
      isLoading: false
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  },
  render: function () {
    var {isLoading, name} = this.state;
    function renderMessage() {
      if(isLoading) {
        return <h2>Searching Strains...</h2>;
      } else if (name) {
        return <CannabisMessage name={name} />;
      }
    }

    return (
      <div className="col-md-12">
        <div className="col-md-4">
          <Card className="canna-card"
            style={{
              padding: '0'
            }}>

            <CardText className="canna-text"
              style={{
                textAlign:       "center",
                width:           '100%',
                margin:          '0 auto',
                paddingTop:      '15px',
                paddingBottom:   '30px'
              }}>
              <CannabisForm onSearch={this.handleSearch} />
            </CardText>
          </Card>
        </div>
        <div className="col-md-8">
          <Card>
            <CardText><h2>STRAINS</h2></CardText>
            {renderMessage()}
          </Card>
        </div>
      </div>

    );
  }
});

module.exports = Cannabis;
