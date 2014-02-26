require.config({
  paths: {
    jquery: '../lib/jquery.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min',
    templates: '../templates'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});