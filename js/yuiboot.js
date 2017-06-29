import todo from "./react/todo.jsx";

var Y = YUI({
  sync: true,
  modules: {
        'foo-widget': './js/yui/foo-widget.js',
        'react-wrapper': './js/yui/react-wrapper.js'
    }
  });

  YUI.add('react-components', function(Y) {
      Y.ReactComponents = {
          Todo: todo
      }
  });

export default {
  boot: function() {
    Y.use("foo-widget", function(Y) {
      var foo = new Y.FooWidget();
      foo.render();
    });
  }
};
