// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/progress'
], function($, _, Backbone, ProgressView) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            ""  : "progress"
        },
        initialize: function () {

        },

        progress: function (id) {
            var progressView = new ProgressView({el:'#content'});
            progressView.render();
        }
    });

    var initialize = function() {
        var  appRouter = new AppRouter();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };

});