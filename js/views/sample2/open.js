define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sample2/open.html',
], function($, _, Backbone, template) {
    var OpenView = Backbone.View.extend({
        el: $("#content"),
        render: function() {
            this.$el.html(_.template(template))
        }
    })
    return OpenView
})
