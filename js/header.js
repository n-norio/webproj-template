define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/header.html',
], function($, _, Backbone, template) {
    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        events: {
            "click #sample": "list",
            "click #sample2": "open",
        },
        initialize: function(){
        },
        render: function() {
            this.$el.append(_.template(template))
        },
        list: function() {
            Backbone.history.navigate("", true)
            return false
        },
        open: function(e) {
            Backbone.history.navigate("open", true)
            return false
        }
    });
    return HeaderView
})
