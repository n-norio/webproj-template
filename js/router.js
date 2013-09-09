define([
    'jquery',
    'underscore',
    'backbone',
    'views/sample/list',
], function($, _, Backbone, SampleListView) {
    var AppRouter = Backbone.Router.extend({
        route: {
            '': 'list',
            'sample': 'list',
        },
        list: function() {
            console.log("list")
            var sampleListView = new SampleListView()
        },
    })
    return new AppRouter()
})
