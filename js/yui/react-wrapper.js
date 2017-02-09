YUI.add('react-wrapper', function (Y) {
  (function(Y) {

      var MODULE_NAME = 'react-wrapper';

      Y.ReactWrapper = Y.Base.create(MODULE_NAME, Y.Widget, [], {
          renderUI: function () {
            // Load a single JavaScript resource.
            class HelloMessage extends React.Component {
              render() {
                return React.createElement(
                  "div",
                  null,
                  "Hello ",
                  this.props.name,
                  " this is React."
                );
              }
            }

            ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), this.get('contentBox').getDOMNode());
          }

      }, {
      });

  }(Y));

}, '1.0.0', {"requires":["widget", "base", "react", "reactDOM"]});
