var React = require('react');
import {Button} from 'react-bootstrap';

var CannabisForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value='';
      this.props.onSearch(name);
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <input type='text' ref='name' placeholder="Search Strains" />
            <Button>submit</Button>
        </form>
      </div>

    );
  }
});

module.exports = CannabisForm;
