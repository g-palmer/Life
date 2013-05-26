// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Board = (function(_super) {
    __extends(Board, _super);

    function Board() {
      _ref = Board.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Board.prototype.initialize = function(n) {
      var ary;

      if (n == null) {
        n = 16;
      }
      this.set('n', n);
      ary = _(_.range(n)).map(function() {
        return _(_.range(n)).map(function() {
          return 0;
        });
      });
      return this.set('cells', ary);
    };

    Board.prototype.getCellState = function(x, y) {
      var n;

      n = this.get('n');
      if ((x >= n) || (x < 0)) {
        return null;
      }
      if ((y >= n) || (y < 0)) {
        return null;
      }
      return this.get('cells')[y][x];
    };

    Board.prototype.toggle = function(x, y) {
      var cells;

      cells = this.get('cells');
      cells[y][x] = cells[y][x] ? 0 : 1;
      return this.trigger('change');
    };

    Board.prototype.checkHoriz = function(x, y) {
      return this.getCellState(x + 1, y) + this.getCellState(x - 1, y);
    };

    Board.prototype.checkVert = function(x, y) {
      return this.getCellState(x, y + 1) + this.getCellState(x, y - 1);
    };

    Board.prototype.checkDiag = function(x, y) {
      return this.getCellState(x + 1, y + 1) + this.getCellState(x - 1, y - 1) + this.getCellState(x + 1, y - 1) + this.getCellState(x - 1, y + 1);
    };

    Board.prototype.checkNeighbors = function(x, y) {
      return this.checkHoriz(x, y) + this.checkVert(x, y) + this.checkDiag(x, y);
    };

    Board.prototype.cellWillLive = function(x, y) {
      var count;

      count = this.checkNeighbors(x, y);
      if (this.getCellState(x, y)) {
        if (count < 2) {
          return false;
        } else if (count > 3) {
          return false;
        } else {
          return true;
        }
      } else {
        if (count === 3) {
          return true;
        }
      }
      return false;
    };

    Board.prototype.step = function() {
      var ary, cells,
        _this = this;

      cells = this.get('cells');
      ary = _(cells).map(function(row, y) {
        return _(row).map(function(cell, x) {
          if (_this.cellWillLive(x, y)) {
            return 1;
          } else {
            return 0;
          }
        });
      });
      return this.set('cells', ary);
    };

    return Board;

  })(Backbone.Model);

}).call(this);

/*
//@ sourceMappingURL=board.map
*/