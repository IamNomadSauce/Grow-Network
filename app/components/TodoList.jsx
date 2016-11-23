var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({
  render: function() {
    var {todos, value} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <div
            style={{
              textAlign:    'center',
              color:        '#aab2ba',
              padding:      '25px'

            }}>
            <p>Nothing left to do...</p>
          </div>

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
