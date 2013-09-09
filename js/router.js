define([
    'jquery',
    'underscore',
    'backbone',
    'views/sample/list',
], function($, _, Backbone, SampleListView) {
    var AppRouter = Backbone.Router.extend({
        route: {
            'sample': 'list',
        },
        list: function() {
        },
    })

    var init = function() {
        var app = new AppRouter()
        Backbone.history.start()
    }
})
