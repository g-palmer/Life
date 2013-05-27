// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.BoardView = (function(_super) {
    __extends(BoardView, _super);

    function BoardView() {
      _ref = BoardView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BoardView.prototype.tagName = 'table';

    BoardView.prototype.initialize = function() {
      var _this = this;

      this.render();
      return this.model.on('change', function() {
        return _this.render();
      });
    };

    BoardView.prototype.render = function() {
      var cells, n,
        _this = this;

      n = this.model.get('n');
      this.$el.empty();
      cells = this.model.get('cells');
      return _(cells).each(function(row, y) {
        var $tr;

        $tr = $('<tr>').appendTo(_this.$el);
        return _(row).each(function(cell, x) {
          var $td;

          $td = new CellView({
            model: cells[y][x]
          }).$el;
          $td.data({
            'x': x,
            'y': y
          });
          return $td.appendTo($tr);
        });
      });
    };

    return BoardView;

  })(Backbone.View);

}).call(this);

/*
//@ sourceMappingURL=boardView.map
*/
