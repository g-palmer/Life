jasmineEnv = jasmine.getEnv()
jasmineEnv.updateInterval = 1000

htmlReporter = new jasmine.HtmlReporter()
jasmineEnv.addReporter htmlReporter
jasmine.specFilter = (spec) ->
  htmlReporter.specFilter(spec)

$ ->jasmineEnv.execute()
