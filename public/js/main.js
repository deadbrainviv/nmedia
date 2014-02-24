var AppRouter = Backbone.Router.extend({

	routes: {
		""	: "home"
	},
	initialize: function () {

	},

	home: function (id) {
		if (!this.homeView) {
			this.homeView = new HomeView();
		}
		$('#content').html(this.homeView.el);
	}
});


utils.loadTemplate(['HomeView'], function () {
	app = new AppRouter();
	Backbone.history.start();
});