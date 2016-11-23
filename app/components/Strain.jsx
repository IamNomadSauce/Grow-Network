var React = require('react');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// TODO add uuid for mapping

var Strain = React.createClass({
  render: function() {
    return (
      <div className="row">
        <Card
          style={{
            padding: '15px',
            margin:   '5px'
          }}>
          <h2>{this.props.name}</h2>
        </Card>
      </div>
    );
  }
});

module.exports = Strain;
