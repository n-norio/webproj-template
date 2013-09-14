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
        list: function(e) {
            this.activateTab(e)
            Backbone.history.navigate("", true)
            return false
        },
        open: function(e) {
            this.activateTab(e)
            Backbone.history.navigate("open", true)
            return false
        },
        activateTab: function(e) {
            $("#menu").find("li").each(function(){
                $(this).removeClass("active")
            })
            $(e.target).parent("li").addClass("active")
        },

    });
    return HeaderView
})
