var React = require('react');
var moment = require('moment');

require('app/assets/styles/todostyles.scss');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt, styles, value} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className="card_container" onClick={() => {
          this.props.onToggle(id);
        }}>

        <div className="card_header">{text}</div>
        <div className="card_footer">{renderDate()}</div>
      </div>
    );
  }
});

module.exports = Todo;
