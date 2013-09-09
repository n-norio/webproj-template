define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, router) {
    return {
        init: function() {
            Backbone.history.start()
        }
    }
})
