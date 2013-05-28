// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.StatsView = (function(_super) {
    __extends(StatsView, _super);

    function StatsView() {
      _ref = StatsView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    StatsView.prototype.template = _.template('\
    <span class="count">n = <%= n %>, # active cells: <%= aliveCells %></span>\
    <div class="slider color"><input id="color" type="range" min="0" max="255" value="127" /></div>\
  ');

    StatsView.prototype.initialize = function() {
      var _this = this;

      this.render();
      return this.model.on('change:aliveCells', function() {
        return _this.render();
      });
    };

    StatsView.prototype.render = function() {
      this.$el.empty();
      return this.$el.html(this.template(this.model.attributes));
    };

    return StatsView;

  })(Backbone.View);

}).call(this);

/*
//@ sourceMappingURL=statsView.map
*/
