define([
    'jquery',
    'underscore',
    'backbone',
    'header',
    'views/sample/list',
    'views/sample2/open'
], function($, _, Backbone, HeaderView, SampleListView, OpenView) {
    var AppRouter = Backbone.Router.extend({
	    initialize: function() {
            var headerView = new HeaderView()
            headerView.render()
            this.list()
	    },
        routes: {
            '': 'list',
            'open': 'open',
        },
        list: function() {
            var sampleListView = new SampleListView()
            sampleListView .render()
        },
        open: function() {
            var openView = new OpenView()
            openView.render()
        }
    })
    return AppRouter
})
