// Generated by CoffeeScript 1.6.2
(function() {
  var htmlReporter, jasmineEnv;

  jasmineEnv = jasmine.getEnv();

  jasmineEnv.updateInterval = 1000;

  htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmine.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(function() {
    return jasmineEnv.execute();
  });

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
