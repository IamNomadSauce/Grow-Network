var React = require('react');
var CannabisForm = require('CannabisForm');
var CannabisMessage = require('CannabisMessage');
var CannabisReports = require('CannabisReports');
var StrainList = require('StrainList');
var axios = require('axios');
var uuid = require('node-uuid');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var Cannabis = React.createClass({
  getInitialState: function() {
    return {
      isLoading:    false,
      strains:      []
    }
  },
  handleSearch: function(name) {
    var that = this;
    this.setState({isLoading: true});
    var dataL = [];
    CannabisReports.getStrain(name).then(function(searchL) {
      // console.log('CANNABIS-getStrain -: PRE-RENDER:strains: ' + strains);
      that.setState({
        id:           uuid(),
        name:         name,
        dataL:        searchL,
        isLoading:    false
      });
      // console.log('CANNABIS-getStrain -: POST-RENDER:strains: ' + strains);
    },
    function(errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function () {
    var {isLoading, name, dataL, strains} = this.state;
    // console.log('CANNABIS - Render strains: ' + {strains});
    // console.log('CANNABIS - Render dataL: ' + {dataL});
    // TODO try a different state method?
    function renderMessage() {
      if(isLoading) {
        return <h2>Searching Strains...</h2>;
      } else if (name) {
        // otherwise use cannabis message
        return <CannabisMessage name={name} dataL={dataL}/>;
      }
    }

    return (
      <div className="row col-md-12">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
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
          <Card
            style={{
              backgroundColor:    '#eee'
            }}
            >
            {renderMessage()}
          </Card>
        </div>
        <div className="col-md-2">
        </div>
      </div>
    );
  }
});

module.exports = Cannabis;
