define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/progressTemplate.html'
], function($, _, Backbone, progressTemplate){


    var ProgressView = Backbone.View.extend({

        events: {
            'click .progress-actions .change-progress': 'clickChangeProgress'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            $(this.el).html(progressTemplate);
            return this;
        },

        clickChangeProgress: function(e) {
            var changeVal = parseInt($(e.currentTarget).attr('data-value'), 10);
            var selectedProgressNumber = $('.progress-list').val();
            var selectedProgress = $('.progress' + selectedProgressNumber);
            var currentVal = parseInt(selectedProgress.attr('aria-valuenow'), 10);
            var newVal = changeVal + currentVal;
            this.changeProgress(selectedProgress, newVal);
        },
        changeProgress: function(progress, newVal) {
            var max = parseInt(progress.attr('aria-valuemax'), 10);
            var min = parseInt(progress.attr('aria-valuemin'), 10);
            var percentage;
            var barWidth;
            var isMax = false;

            if (newVal >= max) {
                percentage = newVal;
                barWidth = max;
                isMax = true;
            } else if (newVal < min) {
                percentage = min;
                barWidth = min;
            } else {
                percentage = newVal;
                barWidth = newVal;
            }

            progress.find('span').text(percentage + '%');
            progress.attr('aria-valuenow', percentage);
            progress.css('width', barWidth + '%');
            if (isMax === true) {
                progress.addClass('progress-bar-danger');
            } else {
                progress.removeClass('progress-bar-danger');
            }
        }


    });

    return ProgressView;

});