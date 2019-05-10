'use strict';
define([
    'pages/login/login.view.js'
], function(View) {
    var controller = function(){
        var view = new View();
        view.render('hello backbone');

    };
    
    return controller;
    
});