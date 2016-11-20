var React = require('react');

var Strain = React.createClass({
  

  render: function() {
    return (
      <div className="row">
        <h2>{this.props.name}</h2>

      </div>
    );
  }
});

module.exports = Strain;
