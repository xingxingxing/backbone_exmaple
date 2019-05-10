define([
    'backbone'
], function(Backbone) {
    'use strict';
    
    var routesMap = {
        'login':'pages/login/login.controller.js',
        'main(/:name)':'pages/main/main.controller.js',
        '*actions': 'defaultAction'
    };

    var  Router = Backbone.Router.extend({
        routes: routesMap,

        // login: function(){
        //     var url = 'pages/login/login.controller.js';
        //     require([url],function(controller){
        //         controller();
        //     })
        // },

        defaultAction: function(){
            location.hash = 'login';
        }

    });

    var router = new Router();
    router.on('route',function(route,params){
        //这里route是路由对应的方法名
        require([route], function (controller) {
            if(router.currentController && router.currentController !== controller){
                router.currentController.onRouteChange && router.currentController.onRouteChange();
            }
                
            router.currentController = controller;
            controller.apply(null, params);     //每个模块约定都返回controller
        });
        
    })
    return router;

});