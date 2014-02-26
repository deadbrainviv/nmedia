describe('View :: Progress', function() {

  beforeEach(function(done) {
    var that = this;
    require(['../js/views/progress'], function(View) {
     
      that.view = new View();
      $('#sandbox').html(that.view.render().el);
      done();
    });
  });

  afterEach(function() {
    this.view.remove();
    
  });

  describe('Initial State', function() {
    it('should be 0% in the beginning for all progress bars.', function (done) {
        for (var i = 1; i <= 3; i++ ) {
          var progressValue = this.view.$el.find('.progress-bar.progress' + i + ' span').text();
          expect(progressValue).to.equal('0%');
          var ariaValueNow = this.view.$el.find('.progress-bar.progress' + i).attr('aria-valuenow');
          expect(ariaValueNow).to.equal('0');
        }
        done();
        
    });

    it('should not be red color in the beginning for all progress bars.', function (done) {
        for (var i = 1; i <= 3; i++ ) {
          var isRed  = this.view.$el.find('.progress-bar.progress' + i).hasClass('progress-bar-danger');
          expect(isRed).to.equal(false);
        }
        done();
        
    });
    
  });

  describe('Click progress number buttons', function() {
    it('should change progress after clicking number buttons', function (done) {
        this.view.$el.find('button.change-progress[data-value="10"]').trigger("click");
        var progressValue = this.view.$el.find('.progress-bar.progress1 span').text();
        expect(progressValue).to.equal('10%');
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        progressValue = this.view.$el.find('.progress-bar.progress1 span').text();
        expect(progressValue).to.equal('35%');
        done();
        
    });

    it('should not go under 0', function (done) {
        this.view.$el.find('button.change-progress[data-value="-10"]').trigger("click");
        var progressValue = this.view.$el.find('.progress-bar.progress1 span').text();
        expect(progressValue).to.equal('0%');
        done();
        
    });

    it('should be able to go over 100', function (done) {
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        var progressValue = this.view.$el.find('.progress-bar.progress1 span').text();
        expect(progressValue).to.equal('125%');
        done();
        
    });

    it('should change to red color if progress is great than or equal to 100', function (done) {
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        var isRed = this.view.$el.find('.progress-bar.progress1').hasClass('progress-bar-danger');
        expect(isRed).to.equal(true);
        done();
        
    });
    
  });

  describe('Reselect progress bar', function() {
    it('should change progress of reselected progress bar after clicking number buttons', function (done) {
        this.view.$el.find('select.progress-list').val('2');
        this.view.$el.find('button.change-progress[data-value="25"]').trigger("click");
        var progressValue = this.view.$el.find('.progress-bar.progress2 span').text();
        expect(progressValue).to.equal('25%');

        //progress bar 1 should still keep the same.
        progressValue = this.view.$el.find('.progress-bar.progress1 span').text();
        expect(progressValue).to.equal('0%');
        done();
        
    });
    
  });


  
});