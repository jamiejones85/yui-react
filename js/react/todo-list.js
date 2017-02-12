define(['react'], function(React) {
  return class TodoList extends React.Component {
    render() {
      return React.createElement(
        'ul',
        null,
        this.props.items.map(item => React.createElement(
          'li',
          { key: item.id },
          item.text
        ))
      );
    }
  }
});
