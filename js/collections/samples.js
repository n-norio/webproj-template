define([
    'jquery',
    'underscore',
    'backbone',
    'models/sample',
], function($, _, Backbone, Sample) {
    var SampleList = Backbone.Collection.extend( {
        model: Sample,
        list: function() {
            sample1 = new Sample()
            sample1.name = "name1"
            sample1.age = 33
            sample2 = new Sample()
            sample2.name = "name2"
            sample2.age = 36
            return [sample1, sample2]
        }
    })
    return SampleList
})

