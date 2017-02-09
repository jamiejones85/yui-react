YUI.add('foo-widget', function (Y) {
  (function(Y) {

      var MODULE_NAME = 'foo-widget',
          TEMPLATE = (function () {
              return [
                  '<div class="yui3">',
                      '<h1>Hi, I\'m YUI.</h1>',
                      '<div class="react-container"></div>',
                  '</div>'
              ].join("\n");
          }());


      Y.FooWidget = Y.Base.create(MODULE_NAME, Y.Widget, [], {
          renderUI: function () {
            this.get('contentBox').prepend(TEMPLATE);
            var reactWrapper = new Y.ReactWrapper({
              contentBox: Y.one('.react-container')
            })
            reactWrapper.render();
          }

      }, {
      });

  }(Y));

}, '1.0.0', {"requires":["widget", "base", "react-wrapper"]});
