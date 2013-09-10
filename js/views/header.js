define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/header.html',
], function($, _, Backbone, template) {
    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        initialize: function(){
        },
        render: function() {
            this.$el.append(_.template(template))
        }
    });
    return HeaderView
})
