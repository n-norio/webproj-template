define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sample/list.html',
    'collections/samples',
    'text!templates/sample/record.html',
], function($, _, Backbone, template, SampleList, lineTemplate) {
    var LineView = Backbone.View.extend({
        render: function(items) {
            return _.template(lineTemplate, items)
        }
    })

    var SampleListView = Backbone.View.extend({
        el: $("#content"),
        collection: new SampleList(),
        initialize: function(){
        },
        render: function() {
            this.$el.html(_.template(template))
            _.each(this.collection.list(), function(model) {
                lineView = new LineView()
                $("#sample_list").append(lineView.render(model))
            })
        }
    })
    return SampleListView
})
