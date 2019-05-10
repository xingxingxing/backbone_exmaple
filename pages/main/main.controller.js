define([
    'pages/main/main.model','pages/main/main.view'
], function(Model,View) {
    'use strict';
    
    
    var controller = function(name){
        var mainModel = new Model();
        name&&mainModel.set({name:name});
        var view  = new View({model:mainModel});
        view.render();
        mainModel.fetch();
        controller.onRouteChange = function () {
            console.log('change');  //可以做一些销毁工作，例如view.undelegateEvents()
            view.undelegateEvents();
        };
    }
    
    return controller;
});