var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card'


var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
require('app/assets/styles/todostyles.scss');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      value: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:           uuid(),
          text:         text,
          completed:    false,
          createdAt:    moment().unix(),
          completedAt:  undefined
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div className="col-md-12">
        <div className="col-md-4">

        </div>
        <div className="col-md-4 main_contain">
          <Card
            style={{
              padding: '15px'

            }} >
            <AddTodo onAddTodo={this.handleAddTodo}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <TodoSearch onSearch={this.handleSearch}/>
          </Card>
        </div>
        <div className="col-md-4">

        </div>
      </div>
    )
  }
});
module.exports = TodoApp;
