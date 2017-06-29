import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list.jsx'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { items: [], text: '' };
    }

    render() {
      return <div>
                <h3>React TODO list</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} value={this.state.text} />
                  <button>Add # {this.state.items.length +1}</button>
                </form>
              </div>
/** ------- Without JSX Support -----------
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'React TODO'
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { onChange: this.handleChange, value: this.state.text }),
          React.createElement(
            'button',
            null,
            'Add #' + (this.state.items.length + 1)
          )
        )
      );*/
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };

      //let YUI know
      this.props.yui.fire('todo:newItem', {newItem: newItem});
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

export default TodoApp;
