require.config({
  
  paths: {
    jquery: '../lib/jquery.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min',
    templates: '../templates',
    mocha: 'js/lib/mocha',
    chai: 'js/lib/chai',
    sinon: 'js/lib/sinon',
    spec: 'js/spec/'
  },
  shim: {
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    },
    sinon: {
      exports: "sinon"
    }
  }
});


require(['underscore', 'jquery', 'mocha', 'chai', 'sinon'], function(_, $, mocha, chai, sinon) {

  // Chai
  this.assert = chai.assert;
  this.expect = chai.expect;

  // Mocha
  mocha.setup({ui: 'bdd', ignoreLeaks: true});

  var specs = [];

  
  specs.push('spec/views/ProgressSpec');
  

  require(specs, function(){
    $(function(){
      mocha.run();//.globals(['Backbone']);
    });
  });

});