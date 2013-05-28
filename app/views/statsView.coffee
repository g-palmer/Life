class window.StatsView extends Backbone.View

  template: _.template '
    <span class="count">n = <%= n %>, # active cells: <%= aliveCells %></span>
    <div class="slider color"><input id="color" type="range" min="0" max="255" value="127" /></div>
  '

  initialize: ->
    @render()

    @model.on 'change:aliveCells', =>
      @render()

  render: ->
    @$el.empty()
    @$el.html @template(@model.attributes)