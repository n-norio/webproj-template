requirejs.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        underscore: 'http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2',
        backbone: 'http://ajax.cdnjs.com/ajax/libs/backbone.js/1.0.0/backbone-min',
        json2: 'http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2',
    }
})

require(['app'
], function(app) {
    app.init()
})
