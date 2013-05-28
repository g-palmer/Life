class window.Cell extends Backbone.Model

  initialize: (params) ->
    @set 'n', params.n
    @set 'x', params.x
    @set 'y', params.y
    @set 'alive', false
    @set 'willLive', false

    @on 'change:alive', ->
      @trigger 'stateChange', @
