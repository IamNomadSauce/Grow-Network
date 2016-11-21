var React = require('react');

var Todo = React.createClass({

  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <h3>{text}</h3>
      </div>
    );
  }
});

module.exports = Todo;
