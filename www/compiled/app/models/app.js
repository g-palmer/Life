// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.initialize = function() {
      return this.set('board', new Board());
    };

    App.prototype.run = function() {
      var board, func;

      board = this.get('board');
      func = function() {
        return board.step();
      };
      return this.set('runIndex', setInterval(func, 250));
    };

    App.prototype.stop = function() {
      return clearInterval(this.get('runIndex'));
    };

    return App;

  })(Backbone.Model);

}).call(this);

/*
//@ sourceMappingURL=app.map
*/
