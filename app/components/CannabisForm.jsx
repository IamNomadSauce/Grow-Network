var React = require('react');
import {Button} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var CannabisForm = React.createClass({
  getInitialState: function() {
    return {
      tfValue:  '',
      searchText: ''
    };
  },
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.state.tfValue;
    // var name = this.refs.name.value;
    if (name.length > 0) {
      this.setState({
        tfValue:  ''
      });
      this.props.onSearch(name);
    }

  },
  handleInputChange: function(e) {
    this.setState({
      tfValue: e.target.value
    })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            hintText="Search Strains"
            onChange={this.handleInputChange}
            ref="name"
            value={this.state.tfValue}
            fullWidth={true}
            />
          <RaisedButton
            label="Search"
            type="submit"
            onClick={this.onFormSubmit}

            />

        </form>
      </div>
    );
  }
});

module.exports = CannabisForm;
