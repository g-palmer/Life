class window.CellView extends Backbone.View

  tagName: 'td'

  initialize: ->

    @r = 255
    @g = Math.floor(255 / @model.get('n') * (@model.get('y') + 1))
    @b = Math.floor(255 / @model.get('n') * (@model.get('x') + 1))

    @model.on 'change:alive', =>
      if @model.get 'alive'
        @$el.css 'background-color': 'rgb('+@r+', '+@g+', '+@b+')'
      else
        @$el.css 'background-color': 'black'

  events:
    'mouseenter': ->
      if window.buttonState
        @model.set 'alive', !@model.get('alive')

    'mousedown': ->
      @model.set 'alive', !@model.get('alive')
