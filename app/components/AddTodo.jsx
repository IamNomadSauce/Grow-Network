var React = require('react');
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var AddTodo = React.createClass({
  getInitialState: function() {
    return {
      tfValue: ''
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    // Recieve onClick event + tfValue - PASS
    // console.log('Submit-Value: ' + this.state.tfValue);
    var todoText = this.state.tfValue;
    // console.log('todoText: ' + todoText);
    // Validate todo
    if(todoText.length > 0) {
      // Reset the tfValue - PASSED
      this.setState({
        tfValue: ''
      });
      // Send off the todo to be rendered - [Test: PASS]
      // console.log('tfValue-RESET' + this.state.tfValue);
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  handleInputChange: function(e) {
    // console.log(e.target.value);
    // Update state upon change - PASS
    this.setState({
      tfValue: e.target.value
    })
    // Handle STATE change - PASS
    // console.log('Handle Change: ' + this.state.tfValue);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Add A Todo"
            onChange={this.handleInputChange}
            ref="todoText"
            value={this.state.tfValue}
            fullWidth={true}
            />
          <RaisedButton
            label='ADD'
            type='submit'
            onClick={this.handleSubmit} />
        </form>
      </div>

    );
  }
});

module.exports = AddTodo;
