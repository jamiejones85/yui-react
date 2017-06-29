YUI.add('react-wrapper', function (Y) {
  (function(Y) {

      var MODULE_NAME = 'react-wrapper';

      Y.ReactWrapper = Y.Base.create(MODULE_NAME, Y.Widget, [], {
          bindUI: function() {
            //lets listen for the react component firing an event to us
            Y.on('todo:newItem', function (e) {
                alert("Looky there! This is YUI, '" + e.newItem.text + "' was added to the react todo.");
            });
          },
          renderUI: function () {
            var yuiParent = this;
            ReactDOM.render(React.createElement(Y.ReactComponents.Todo, { yui: Y }), yuiParent.get('contentBox').getDOMNode());

          }

      }, {
      });

  }(Y));

}, '1.0.0', {"requires":["widget", "base", "event-custom", "react-components"]});
