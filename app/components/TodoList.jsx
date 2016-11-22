var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({
  render: function() {
    var {todos, value} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p>Nothing left to do...</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
