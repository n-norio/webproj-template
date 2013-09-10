define([
    'jquery',
    'underscore',
    'backbone',
    'views/header',
    'views/sample/list',
], function($, _, Backbone, HeaderView, SampleListView) {
    var AppRouter = Backbone.Router.extend({
	    initialize: function() {
            var headerView = new HeaderView()
            headerView.render()
            this.list()
	    },
        route: {
            '': 'list',
            'sample': 'list',
        },
        list: function() {
            var sampleListView = new SampleListView()
        },
    })
    return new AppRouter()
})
