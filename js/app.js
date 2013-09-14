define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, AppRouter) {
    return {
        init: function() {
            router = new AppRouter()
            Backbone.history.start()
        }
    }
})
